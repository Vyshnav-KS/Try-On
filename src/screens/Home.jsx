import React from "react";
import "./Home.css";
import HomeMainImg from "../assets/images/home_main.png";
import Men from "../assets/images/Men.png";
import Women from "../assets/images/Women.png";
import Kids from "../assets/images/Kids.png";
import Jacket from "../assets/images/jacket.jpeg";
import Frok from "../assets/images/Frok.png"
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home-root">
      <Header />
      <div className="home-container">
        <div className="home-category-header">
          <div className="home-category-imagesec">
            <Link to="/products">
              <img src={Men} alt="Men" className="home-category-image" />
            </Link>
            <div>MEN</div>
          </div>
          <div className="home-category-imagesec">
            <Link to="/products">
              <img src={Women} alt="Women" className="home-category-image" />
            </Link>
            <div>WOMEN</div>
          </div>
          <div className="home-category-imagesec">
            <Link to="/products">
              <img src={Kids} alt="Kids" className="home-category-image" />
            </Link>
            <div>KIDS</div>
          </div>
        </div>
      </div>

      <div className="home-main-image">
        <Link to="/products">
          <img src={HomeMainImg} alt="" className="home-main-image-sales" />
        </Link>
      </div>

      <div className="home-trending-section">
        <div className="home-trending-title">TRENDING</div>
        <div className="home-trending-images">
          <div className="home-trending-card">
            <Link to="/single-product-1">
              <img src={Jacket} alt="" className="home-trending-image" />
            </Link>
            <div className="home-trending-card-details">
              <div className="home-trending-card-title">
                <div>Regular fit Teddy</div>
                <div>Jacket</div>
              </div>
              <div className="home-trending-card-price">Rs 1999</div>
            </div>
          </div>
          <div className="home-trending-card">
            <Link to='/single-product-2' >
            <img
              src={Frok}
              alt="Frok"
              className="home-trending-image"
            />
            </Link>
            <div className="home-trending-card-details">
              <div className="home-trending-card-title">
                <div>Regular fit Floral</div>
                <div>Frok</div>
              </div>
              <div className="home-trending-card-price">Rs 3999</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
