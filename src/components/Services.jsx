import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/asset5.jpg";
import img2 from "../assets/asset6.jpg";
import img3 from "../assets/asset7.jpg";
import img4 from "../assets/asset8.jpg";

const Services = () => {
  return (
    <div className="services" style={{minHeight:"90vh"}}>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <img src={img1} alt="image1" />
          <p className="legend">Website Design</p>
        </div>
        <div>
          <img src={img2} alt="image2" />
          <p className="legend">Mobile Application Development</p>
        </div>
        <div>
          <img src={img3} alt="image3" />
          <p className="legend">Blockchain Development</p>
        </div>
        <div>
          <img src={img4} alt="image4" />
          <p className="legend">Game Development</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
