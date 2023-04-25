import React from "react";
import Jacket from "../assets/images/jacket.jpeg";
import Frok from '../assets/images/Frok.png'
import Hd from '../assets/images/Hd.jpg'
import "./Product.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="product-root">
      <Header />
      <div className="product-container">
        <div className="product-sort-filter">
          <div className="sort">
            <div>SORT</div>
          </div>
          <div className="filter">
            <div>FILTER</div>
          </div>
        </div>

        <div className="products-sec">
          <div className="product-sec-card">
            <Link to="/single-product-1">
              <img src={Jacket} alt="" className="product-sec-image" />
            </Link>
            <div className="product-sec-card-details">
              <div className="product-sec-card-title">
                <div>Regular fit Black</div>
                <div>Jacket</div>
              </div>
              <div className="product-sec-card-price">Rs 1999</div>
            </div>
          </div>

          <div className="product-sec-card">
            <Link to="/single-product-2">
              <img src={Frok} alt="" className="product-sec-image" />
            </Link>
            <div className="product-sec-card-details">
              <div className="product-sec-card-title">
                <div>Regular fit Floral</div>
                <div>Frok</div>
              </div>
              <div className="product-sec-card-price">Rs 3999</div>
            </div>
          </div>

          <div className="product-sec-card">
            <Link to="/single-product-3">
              <img src={Hd} alt="" className="product-sec-image" />
            </Link>
            <div className="product-sec-card-details">
              <div className="product-sec-card-title">
                <div>Regular fit Black</div>
                <div>Hoodie</div>
              </div>
              <div className="product-sec-card-price">Rs 2999</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
