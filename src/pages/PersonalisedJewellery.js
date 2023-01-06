import React from "react";
import custom1 from "../assets/Custom Jewellary/custom1.jpg";
import custom2 from "../assets/Custom Jewellary/custom2.jpg";
import "./PersonalisedJewellery.css";

const PersonalisedJewellery = () => {
  return (
    <div>
      <h1 className="text-center p-10  text-lg sm:text-justify">
        <span className="font-bold">Personalized jewellery</span> and
        personalized gifts are the specialty of{" "}
        <span className="font-bold">Lavender</span>. We offer a wide range of
        best-quality personalised handmade jewellery for both men and women.
        Explore our latest collection today
      </h1>

      <div className="grid gap-10 lg:grid-cols-2 px-10">
        <div className="necklaceSection" style={{ height: "600px" }}>
          <img style={{ height: "100%", width: "100%" }} src={custom1} alt="" />
          <div className="customJewellaryTag">
            <h1 className="font-semibold">NECKLACES</h1>
            <h1 className="font-semibold underline">SHOP NOW</h1>
          </div>
        </div>
        <div className="braceletsSection" style={{ height: "600px" }}>
          <img style={{ height: "100%", width: "100%" }} src={custom2} alt="" />
          <div className="customJewellaryTag">
            <h1 className="font-semibold">BRACELETS</h1>
            <h1 className="font-semibold underline">SHOP NOW</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalisedJewellery;
