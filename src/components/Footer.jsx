import React from "react";
import "../styles/Footer.scss";
import logo from "../assets/asset3.png";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
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
        <a
          href="https://www.linkedin.com/in/alok-dwivedi-4347801b8/"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100070380284005"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://twitter.com/alokdwivedi99"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://www.instagram.com/_its_alok_07_/"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://github.com/alok-96"
          target="blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
