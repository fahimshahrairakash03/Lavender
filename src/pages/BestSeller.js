import React from "react";
import ring1 from "../assets/best seller/ring1.png";
import ring2 from "../assets/best seller/ring2.jpg";
import ring3 from "../assets/best seller/ring3.jpg";
import ring4 from "../assets/best seller/ring4.jpg";
const BestSeller = () => {
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
    <div className="p-10">
      <div className="text-center pb-10">
        <span className="text-xl font-meduim">BEST SELLERS</span>
        <span className="px-5 text-2xl font-bold">|</span>
        <span className="text-xl font-meduim">ON SALE!</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
        {products.map((product) => (
          <div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
