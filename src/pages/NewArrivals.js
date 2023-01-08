import React from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import ring1 from "../assets/best seller/ring1.png";
import ring2 from "../assets/best seller/ring2.jpg";
import ring3 from "../assets/best seller/ring3.jpg";
import ring4 from "../assets/best seller/ring4.jpg";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const products = [
    {
      name: "18k Yellow Gold Bold Medium Hoops Ring",
      price: "Tk 49,500.00",
      photo: ring1,
    },
    {
      name: "18k Yellow Gold Bold Medium Hoops Earrings",
      price: "Tk 49,500.00",
      photo: ring2,
    },
    {
      name: "18k Yellow Gold Bold Medium Hoops Earrings",
      price: "Tk 49,500.00",
      photo: ring3,
    },
    {
      name: "18k Yellow Gold Bold Medium Hoops Earrings",
      price: "Tk 49,500.00",
      photo: ring4,
    },
  ];
  return (
    <div className="px-10 my-20 ">
      <div className="flex justify-between">
        <h1 className="text-3xl pb-10 font-medium">NEW ARRIVALS</h1>
        <Link to="/allproducts">
          {" "}
          <PrimaryBtn>VIEW ALL</PrimaryBtn>
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
        {products.map((product, i) => (
          <div key={i}>
            <Link to="/productdetails">
              <div
                style={{ width: "300px" }}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    style={{ height: "250px", width: "100%" }}
                    src={product.photo}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>Price: {product.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
