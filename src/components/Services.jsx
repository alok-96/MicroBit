import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/services.scss";

import img1 from "../assets/asset5.jpg";
import img2 from "../assets/asset6.jpg";
import img3 from "../assets/asset7.jpg";
import img4 from "../assets/asset8.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <img src={img1} alt="image" />
          <p className="legend">Website Design</p>
        </div>
        <div>
          <img src={img2} alt="image" />
          <p className="legend">Mobile Application Development</p>
        </div>
        <div>
          <img src={img3} alt="image" />
          <p className="legend">Blockchain Development</p>
        </div>
        <div>
          <img src={img4} alt="image" />
          <p className="legend">Game Development</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
