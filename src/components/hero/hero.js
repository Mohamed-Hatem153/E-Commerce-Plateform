import React from "react";
import "./hero.scss";
import heroImg from "../../assets/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-one">
      <div className="hero-left">
        <span className="hero-span">Exclusive Sales</span>
        <h1 className="hero-h1">UP TO 50% OFF ON SALES</h1>
        <small className="hero-small">
          Get all exclusive offers for the season
        </small>
        <Link to="/shop" className="hero-button">
          View Collection
        </Link>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="hero" className="hero-img" />
      </div>
    </div>
  );
};
export default Hero;
