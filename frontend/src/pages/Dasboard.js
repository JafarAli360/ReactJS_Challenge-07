import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MyLayout from "../components/MyLayout";
import NavbarLayout from "../components/NavbarLayout";
import Service from "../components/Service";
import SewaMobil from "../components/SewaMobil";
import Carousel from "../components/Carousel";
import Accourdion from "../components/Accourdion";
import React from "react";

const Dasboard = () => {
  return (
    <div>
      <NavbarLayout />
      <Hero />
      <Service />
      <MyLayout />
      <Carousel />
      <SewaMobil />
      <Accourdion />
      <Footer />
    </div>
  );
};

export default Dasboard;
