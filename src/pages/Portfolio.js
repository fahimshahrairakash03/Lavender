import React from "react";
import img1 from "../assets/portfolio/img1.jpg";
import img2 from "../assets/portfolio/img2.jpg";
import img3 from "../assets/portfolio/img3.jpg";
import img4 from "../assets/portfolio/img4.jpg";
import img5 from "../assets/portfolio/img5.jpg";
import img6 from "../assets/portfolio/img6.jpg";
import img7 from "../assets/portfolio/img7.jpg";
import img8 from "../assets/portfolio/img8.jpg";
import "./Porfolio.css";

const Portfolio = () => {
  const images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
  ];

  return (
    <div className="mt-20 p-3">
      <h1 className="text-5xl mb-10 text-center">#Lavender</h1>
      <div className="grid gap-3 lg:grid-cols-4">
        {images.map((image, i) => (
          <img
            key={i}
            alt=""
            className="portfolio-img"
            style={{ height: "350px", width: "400px" }}
            src={image.img}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
