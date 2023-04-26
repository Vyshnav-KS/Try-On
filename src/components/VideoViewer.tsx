import { useEffect, useRef } from "react";
import { setupCameraStream } from "../scripts/Camera";
import { DisplayVideo } from "../scripts/videoPlayer";
import React from "react";
import icon from "../assets/camera-icon.png";

let [width, height] = [0, 0];
let gl: WebGL2RenderingContext | null = null;
export const getScreenDim = () => [width, height];

const VideoViewer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);

  // Init Video player
  const initVideoPlayer = async () => {
    if (videoRef.current == null || canvasRef.current == null) return;

    const videoEl = videoRef.current;
    [width, height] = await setupCameraStream(videoEl);

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    gl = canvasRef.current.getContext("webgl2", {
      preserveDrawingBuffer: true,
    });
    if (gl == null) throw "Failed to get webgl2 context";
    const mdlPath = localStorage.getItem("model") || "jack_new/jack";
    await DisplayVideo(gl, videoEl, animationIdRef, mdlPath);
  };

  useEffect(() => {
    initVideoPlayer().catch((err) => {
      console.log(err);
    });

    return () => {
      for (
        let i = animationIdRef.current;
        i < animationIdRef.current + 30;
        i++
      ) {
        console.log("cancelAnimationFrame::", i);
        window.cancelAnimationFrame(i);
      }
      animationIdRef.current = -999;
    };
  }, []);

  const saveSS = () => {
    if (canvasRef.current == null) return;

    if (gl == null) return;
    const canvas = document.createElement("canvas");
    canvas.width = gl.canvas.width;
    canvas.height = gl.canvas.height;

    // Get the canvas context and draw the WebGL2 context onto the canvas
    const context = canvas.getContext("2d");
    context?.drawImage(canvasRef.current, 0, 0);

    // Convert the canvas to a PNG data URL
    const dataURL = canvas.toDataURL("image/png");

    // Create a link element to download the PNG file
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "screenshot.png";

    // Click the link to start the download
    downloadLink.click();
  };

  return (
    <div>
      <video autoPlay ref={videoRef} style={{ width: 0, height: 0 }} />
      <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh" }} />
      <div
        style={{
          position: "absolute",
          top: "80vh",
          width: "max-content",
          left: "calc(50% - 38px)",
        }}
        onClick={saveSS}
      >
        <img src={icon} alt="asda" />
      </div>
      <div>
        <input type="number" id="ypos" placeholder="ypos" step={0.05} />
        <input type="number" id="xpos" placeholder="xpos" step={0.05} />
        <input type="number" id="scale" placeholder="scale" min={1} />
        <input type="number" id="offset" placeholder="offset" step={0.05} />
      </div>
    </div>
  );
};

export default VideoViewer;
