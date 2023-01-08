import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import SearchModal from "./SearchModal";
import { FaUserAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const menuItem = (
    <>
      <Link to="/">
        {" "}
        <li>
          <a className="font-semibold">Home</a>
        </li>
      </Link>
      <Link to="/allproducts">
        {" "}
        <li>
          <a className="font-semibold">All Products</a>
        </li>
      </Link>
      <Link to="/productdetails">
        {" "}
        <li>
          <a className="font-semibold">Product Details</a>
        </li>
      </Link>
    </>
  );
  return (
    <div style={{ "z-index": "1" }} className="fixed w-full">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <img style={{ height: "40px" }} src={logo} alt="" />
          </Link>
          <Link to="/">
            <a className=" normal-case text-xl ">Lavender</a>
          </Link>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => handleClick("en")}
            className="btn btn-xs btn-ghost"
          >
            English
          </button>
          <button
            onClick={() => handleClick("bn")}
            className="btn btn-xs btn-ghost"
          >
            Bangla
          </button>

          <SearchModal></SearchModal>
          <button className="btn btn-ghost btn-circle">
            <Link to="/login">
              <FaUserAlt></FaUserAlt>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
