import React from "react";
import shipping from "../assets/customer service/shipping.png";
import warrenty from "../assets/customer service/warrenty.png";
import returns from "../assets/customer service/return.png";
import secure from "../assets/customer service/secure.png";

const CustomerService = () => {
  const services = [
    {
      title: "FREE SHIPPING",
      details: "Free worldwide shipping",
      photo: shipping,
    },
    {
      title: "2 YEAR WARRANTY",
      details: "Every piece comes with a 2 year warranty",
      photo: warrenty,
    },
    {
      title: "100-DAY RETURNS",
      details: "We offer a full refund within 100 days of purchase",
      photo: returns,
    },
    {
      title: "SECURE CHECKOUT",
      details: "Safe and secure online shopping",
      photo: secure,
    },
  ];

  return (
    <div style={{ background: "#F9F8F6" }} className="pt-10">
      <h1 className="text-center font-bold text-4xl">
        Customer Satisfaction Guaranteed
      </h1>

      <div className="grid gap-11	 lg:grid-cols-4 sm:grid-cols-2 px-10 py-5 mx-auto">
        {services.map((service) => (
          <div>
            {" "}
            <img style={{ height: "100px" }} src={service.photo} alt="" />
            <br />
            <h1 className="text-xl font-semibold">{service.title}</h1>
            <p className="text-sm mt-2">{service.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerService;
