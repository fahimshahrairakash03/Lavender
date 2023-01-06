import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ring1 from "../assets/best seller/ring1.png";
import ring2 from "../assets/best seller/ring2.jpg";
import ring3 from "../assets/best seller/ring3.jpg";
import ring4 from "../assets/best seller/ring4.jpg";
import PrimaryBtn from "../components/PrimaryBtn";

const PremiumJewellary = () => {
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="my-5">
        <PrimaryBtn>SHOP ALL</PrimaryBtn>
      </div>
    </div>
  );
};

export default PremiumJewellary;
