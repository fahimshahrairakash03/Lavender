import React, { useEffect, useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="px-10 my-10">
      <div className="flex justify-between">
        <h1 className="text-3xl pb-10 font-medium">DIAMOND JEWELRY</h1>
        <PrimaryBtn>VIEW ALL</PrimaryBtn>
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
                  src={product.img}
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

export default AllProducts;
