import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      devOptions: {
        enabled: true,
      },
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.png",
        "robots.txt",
        "apple-touch-icon.png",
        "icons/*.svg",
        "models/",
      ],
      manifest: {
        name: "TryON",
        short_name: "TryOn",
        description: "Try on",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      srcDir: "./",
    }),
    react(),
  ],
});
