import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import Contact from "./Contact";
import CustomerRivew from "./CustomerRivew";
import CustomerService from "./CustomerService";
import Diamond from "./Diamond";
import NewArrivals from "./NewArrivals";
import PersonalisedJewellery from "./PersonalisedJewellery";
import Portfolio from "./Portfolio";
import PremiumJewellary from "./PremiumJewellary";
import PremiumRigns from "./PremiumRigns";
import StoneCollection from "./StoneCollection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerService></CustomerService>
      <PersonalisedJewellery></PersonalisedJewellery>
      <BestSeller></BestSeller>
      <PremiumJewellary></PremiumJewellary>
      <NewArrivals></NewArrivals>
      <StoneCollection></StoneCollection>
      <PremiumRigns></PremiumRigns>
      <Diamond></Diamond>
      <CustomerRivew></CustomerRivew>
      <Contact></Contact>
      <Portfolio></Portfolio>
    </div>
  );
};

export default Home;
