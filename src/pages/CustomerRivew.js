import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const CustomerRivew = () => {
  const reviews = [
    {
      review: "Recommended",
      detail: "Good quality and nice stuff +ACEAIQ-",
      reviewer: "Anonymous",
      date: "08/28/2021",
    },
    {
      review: "They were extremely helpful",
      detail: "The quality seems good for the price",
      reviewer: "Destiny",
      date: "09/16/2022",
    },
    {
      review: "Best Quality Jewelry ",
      detail:
        "My necklace was beautiful my sister wanted one so I bought her one as well. They really are beautiful and good quality . I did think it",
      reviewer: "Amelia",
      date: "08/28/2021",
    },
    {
      review: "So happy with my necklace!",
      detail: "I bought one for myself and my daughter. She loves hers too!",
      reviewer: "Jacqueline",
      date: "09/16/2022",
    },
  ];

  return (
    <div className="lg:ml-10 my-28">
      <div className="lg:flex lg:justify-around p-10">
        <div className="lg:w-1/4 md:w-full">
          <h1 className="text-center font-semibold text-5xl pt-20">
            Let customers <br /> speak for us
          </h1>
          <p
            style={{ color: "#04B47C" }}
            className="flex justify-center align-center mt-5"
          >
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </p>
          <p className="text-center  font-medium ">from 10106 reviews</p>

          <div className="pb-5 flex justify-center align-center"></div>
        </div>
        <div className="lg:w-1/2 banner w-full ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <div className="ms-20">
                <SwiperSlide>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <p style={{ color: "#04B47C" }} className="flex ">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                      </p>
                      <h2 className="card-title">{review.review}</h2>
                      <p>{review.detail}</p>
                      <div className="mt-10">
                        <p className="font-bold text-lg">{review.reviewer}</p>
                        <p className="text-xs">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomerRivew;
