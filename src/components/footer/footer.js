import React from "react";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/paytm.png";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="left-col">
          <img src={logo} alt="logo" className="logo" />
          <div className="social-media">
            <FaFacebookF className="fab" />
            <FaTwitter className="fab" />
            <FaInstagram className="fab" />
            <FaYoutube className="fab" />
            <FaLinkedinIn className="fab" />
          </div>
          <p className="rights-text">
            © {new Date().getFullYear()} Created By Mohamed.H.3kl All Rights
            Reserved.
          </p>
        </div>

        <div className="right-col">
          <h1>Our Newsletter</h1>
          <div className="border"></div>
          <p>Enter Your Email to get our news and updates.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="txtb"
              placeholder="Enter Your Email"
            />
            <input type="submit" className="footer-btn" value="submit" />
          </form>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
