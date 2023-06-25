import React from "react";
import { Carousel } from "react-responsive-carousel";
import servicesImg1 from "../assets/3.jpg";
import servicesImg2 from "../assets/4.jpg";
import servicesImg3 from "../assets/1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        // showArrows={false}
        interval={2000}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img src={servicesImg1} alt="img" />
          <p className="legend"> FrontEnd Devloper</p>
        </div>
        <div>
          <img src={servicesImg2} alt="img" />
          <p className="legend">BackEnd Devloper</p>
        </div>
        <div>
          <img src={servicesImg3} alt="img" />
          <p className="legend">Full Stack Devloper</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
