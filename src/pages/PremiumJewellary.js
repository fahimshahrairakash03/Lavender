import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ring1 from "../assets/best seller/ring1.png";
import ring2 from "../assets/best seller/ring2.jpg";
import ring3 from "../assets/best seller/ring3.jpg";
import ring4 from "../assets/best seller/ring4.jpg";
import PrimaryBtn from "../components/PrimaryBtn";
import { Link } from "react-router-dom";

const PremiumJewellary = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="px-10">
      <h1 className="text-3xl pb-10 font-medium">
        Discover Our Premium Jewelry
      </h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mySwiper"
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="my-5">
        <Link to="/allproducts">
          {" "}
          <PrimaryBtn>VIEW ALL</PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default PremiumJewellary;
