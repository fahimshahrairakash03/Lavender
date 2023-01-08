import React from "react";
import "./Contact.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-10">
      <hr />
      <h1 className="text-3xl font-medium my-5">BE THE FIRST TO KNOW!</h1>
      <p className="text-lg font-medium">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime
        deals & insider information on exclusive offers and new arrivals.
      </p>

      <div className="my-10 flex" style={{ width: "100%" }}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
        />
        <button className="btn-contact">SUBSCRIBE</button>
      </div>
      <div className="flex justify-center align-center mb-5 ">
        <a target="blank" href="https://www.facebook.com/">
          <FaFacebookF className="mr-3"></FaFacebookF>
        </a>
        <a target="blank" href="https://twitter.com/?lang=en">
          {" "}
          <FaTwitter className="mr-3"></FaTwitter>
        </a>
        <a target="blank" href="https://www.instagram.com/">
          {" "}
          <FaInstagram className="mr-3"></FaInstagram>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Contact;
