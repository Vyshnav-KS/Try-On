import React from "react";
import Jacket from "../assets/images/jacket.jpeg";
import "./SingleProduct.css";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const nav = useNavigate();
  const setSize = (size) => {
    localStorage.setItem("size", size);
  };
  return (
    <div className="sproduct-root">
      <div className="sproduct-container">
        <div className="sproduct-image-container">
          <Header />
          <img src={Jacket} alt="Jacket" className="sproduct-image" />
          <div
            className="sproduct-tryon-option"
            onClick={() => {
              localStorage.setItem("model", "jack_new/jack");
              nav("/app");
            }}
          >
            Try On
          </div>
        </div>

        <div className="sproduct-details">
          <div className="sproduct-title">Regular Fit Black Jacket</div>
          <div className="sproduct-price">
            Rs. 1999
            <span className="sproduct-price-tax">ALL INCLUSIVE TAX</span>
          </div>

          <div className="sproduct-size-sec">
            <div className="sproduct-size-header">
              <div>SELECT SIZE</div>
            </div>
            <div className="sproduct-size-box-row">
              <div className="sproduct-size-box" onClick={() => setSize("XS")}>
                XS
              </div>
              <div className="sproduct-size-box" onClick={() => setSize("S")}>
                S
              </div>
              <div className="sproduct-size-box" onClick={() => setSize("M")}>
                M
              </div>
              <div className="sproduct-size-box" onClick={() => setSize("L")}>
                L
              </div>
              <div className="sproduct-size-box" onClick={() => setSize("XL")}>
                XL
              </div>
            </div>
          </div>

          <div className="sproduct-desc-sec">
            <div className="sproduct-desc-title">PRODUCT DESCRIPTION</div>
            <div className="sproduct-desc-description">
              Black solid cropped puffer jacket, has a hood, 2 pockets, zip
              closure, long sleeves, straight hem, and polyester lining <br />
              <b>Model Size & Fit</b> <br /> The model (height 5'8") is wearing
              a size S Material &
              <br /> Care Material: Polyester
              <br />
              Dry-clean
            </div>
          </div>
        </div>

        <div className="sproduct-footer">
          <button className="sproduct-footer-cart-button"> ADD TO CART</button>
          <Link to="/address" className="sproduct-footer-buy-button">
            {" "}
            BUY NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
