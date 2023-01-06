import React from "react";
import Banner from "./Banner";
import CustomerService from "./CustomerService";
import PersonalisedJewellery from "./PersonalisedJewellery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerService></CustomerService>
      <PersonalisedJewellery></PersonalisedJewellery>
    </div>
  );
};

export default Home;
