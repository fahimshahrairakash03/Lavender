import React from "react";
import banner from "../assets/banner.jpg";
import PrimaryBtn from "../components/PrimaryBtn";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="lg:flex">
      <div style={{ background: "#f7e1da" }} className="lg:w-1/4 md:w-full">
        <h1 className="text-center font-semibold text-7xl pt-20">New Year</h1>
        <h1 className="text-xl font-semibold mt-5 text-center">
          New Arrival With New Design{" "}
        </h1>
        <p className="text-center m-10 font-medium ">
          Discover a luxury timeless classic
        </p>

        <div className="pb-5 flex justify-center align-center">
          <PrimaryBtn>SHOP NOW</PrimaryBtn>
        </div>
      </div>
      <div
        className="lg:w-3/4 banner w-full "
        style={{
          background: `url(${banner})`,
          height: "500px",
          backgroundSize: "cover",
        }}
      >
        <button className="bannerbtn1 m-5 font-semibold">NEW ARRIVALS</button>
        <button className="bannerbtn m-5 font-semibold">BEST SELLERS</button>
      </div>
    </div>
  );
};

export default Banner;
