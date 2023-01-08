import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="ft">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Lavender</span>

          <a href="" className="link link-hover">
            LAVENDER is a lifestyle retailer dedicated to <br />
            inspiring customers through a unique combination <br />
            of product, creativity and cultural understanding. <br />
            Celebrating the precious moments of life with <br />
            meaningful Jewellery is LAVENDER true calling.
          </a>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="" className="link link-hover">
            Branding
          </a>
          <a href="" className="link link-hover">
            Design
          </a>
          <a href="" className="link link-hover">
            Marketing
          </a>
          <a href="" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="" className="link link-hover">
            About us
          </a>
          <a href="" className="link link-hover">
            Contact
          </a>
          <a href="" className="link link-hover">
            Jobs
          </a>
          <a href="" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="" className="link link-hover">
            Terms of use
          </a>
          <a href="" className="link link-hover">
            Privacy policy
          </a>
          <a href="" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
      <p className="text-white py-16 text-center">© 2023 - Lavender</p>
    </div>
  );
};

export default Footer;
