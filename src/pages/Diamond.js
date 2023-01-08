import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ring1 from "../assets/best seller/ring1.png";
import ring2 from "../assets/best seller/ring2.jpg";
import ring3 from "../assets/best seller/ring3.jpg";
import ring4 from "../assets/best seller/ring4.jpg";
import PrimaryBtn from "../components/PrimaryBtn";

const Diamond = () => {
  const [allproducts, setProducts] = useState([]);

  const products = allproducts.slice(4, 8);

  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="px-10 my-20">
      <div className="flex justify-between">
        <h1 className="text-3xl pb-10 font-medium">DIAMOND JEWELRY</h1>
        <Link to="/allproducts">
          {" "}
          <PrimaryBtn>VIEW ALL</PrimaryBtn>
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
        {products.map((product) => (
          <div key={product.id}>
            <Link to="/productdetails">
              <div
                style={{ width: "300px" }}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    style={{ height: "250px", width: "100%" }}
                    src={product.img}
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

export default Diamond;
