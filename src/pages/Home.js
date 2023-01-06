import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import CustomerService from "./CustomerService";
import PersonalisedJewellery from "./PersonalisedJewellery";
import PremiumJewellary from "./PremiumJewellary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerService></CustomerService>
      <PersonalisedJewellery></PersonalisedJewellery>
      <BestSeller></BestSeller>
      <PremiumJewellary></PremiumJewellary>
    </div>
  );
};

export default Home;
