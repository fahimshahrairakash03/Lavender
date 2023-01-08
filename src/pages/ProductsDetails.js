import React, { useState } from "react";
import silver from "../assets/colors/silver.png";
import gold from "../assets/colors/gold.png";
import rosegold from "../assets/colors/rose gold.png";
import vgold from "../assets/colors/vgold.png";
import schain from "../assets/chain/silver.jpg";
import gchain from "../assets/chain/gold.jpg";
import rschain from "../assets/chain/rosegold.jpg";
import vgchain from "../assets/chain/vgold.jpg";
import "./ProductsDetails.css";
import { IconName } from "react-icons/fa";

const ProductsDetails = () => {
  const [image, setImage] = useState(schain);

  const products = [
    {
      id: 1,
      color: silver,
      chain: schain,
    },
    {
      id: 2,
      color: gold,
      chain: gchain,
    },
    {
      id: 3,
      color: rosegold,
      chain: rschain,
    },
    {
      id: 4,
      color: vgold,
      chain: vgchain,
    },
  ];

  const handleJewellary = (img) => {
    console.log(img);
    setImage(img);
  };

  return (
    <div className="lg:flex pt-28 px-10">
      <div className="lg:w-1/2">
        <div>
          <img style={{ height: "500px", width: "500px" }} src={image} alt="" />
        </div>
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-center text-4xl font-medium ">
          Cursive Name Necklace Gold Vermeil with Diamond
        </h1>
        <p className="text-center">Size Guide</p>
        <p className="text-center">Tk 22,700.00</p>
        <p className="text-center">Taxes & Duties Included</p>
        <p className="text-center">available for orders up to $2,000</p>
        <p className="text-center mt-3 font-medium">STEP 1: CHOOSE MATERIAL</p>
        <div className="flex justify-center mb-10 align-center">
          {products.map((product) => (
            <div
              onClick={() => handleJewellary(product.chain)}
              className="w-6 mr-3 mt-3  rounded-full"
            >
              <img src={product.color} />
            </div>
          ))}
        </div>
        <hr />
        <h1 className="text-center m-3 font-medium">
          WRITE NAME OR TEXT BELOW ⬇️: (UP TO 10 CHARACTERS):
        </h1>
        <input
          type="text"
          placeholder="Enter Name or Text Here"
          className="input input-bordered w-full"
        />

        <button className="addtocart w-full py-2 my-3  font-semibold">
          ADD TO CART
        </button>
        <p className="text-center my-3 btn-outline ">Add To Wishlist </p>

        <hr />
        <p className="my-2">Free Shipping + 100 Days Free Returns</p>
        <hr />
        <p className="my-2">Happiness Guaranteed</p>

        <div className="grid gap-5 mb-10 grid-cols-2">
          <div className="qualitybox">
            <p>Water, sweat and heat-resistant</p>
          </div>
          <div className="qualitybox">
            <p>2 year warranty and hassle free returns</p>
          </div>
          <div className="qualitybox">
            <p>ECO Friendly</p>
          </div>
          <div className="qualitybox">
            <p>Luxury gift packaging available</p>
          </div>
        </div>
        <p className="text-sm">Need Product Help?Get In Touch With An Expert</p>

        <div className="my-10">
          <div
            tabIndex={0}
            className="collapse  collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Description
            </div>
            <div className="collapse-content">
              <p>
                Grace and elegance! The magnificent script font of our cursive
                personalised diamond name necklace in gold vermeil with diamond
                attractively displays the name or word of your choice. Your
                unique customised name necklace is displayed on a matching chain
                and is exquisitely complemented with a diamond. Gold Vermeil, a
                thicker, more resilient, and even more opulent gold covering
                than regular gold plate, was used to make this necklace. Among
                its attributes are: only one name or word Round diamond accent,
                modern script font similar chain
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              JEWELRY CARE
            </div>
            <div className="collapse-content">
              <p>
                We strongly recommend that you remove your "cursive personalised
                name necklace gold vermeil with diamond" jewelry before engaging
                in any activity that may cause exposure to moisture or friction
                (i.e. hand washing, sleeping, and showering) to maintain shine
                and extend shelf life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
