import React from "react";
import "../styles/Footer.scss";
import logo from "../assets/asset3.png";
import {
    AiFillCodepenCircle,
    AiFillFacebook,
    AiFillInstagram,
    AiFillGithub,
    AiFillTwitterCircle
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="logo">
        <div>
          <img src={logo} alt="logo-icon" style={{ width: "30px" }} />
          <h2>MicroBit</h2>
        </div>
        <p>Copyright &copy; All Right Reserved.</p>
      </div>
      <div className="socials">
        <AiFillCodepenCircle />
        <AiFillFacebook />
        <AiFillTwitterCircle />
        <AiFillInstagram />
        <AiFillGithub />
      </div>
    </div>
  );
};

export default Footer;
