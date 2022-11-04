import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavbarLayout from "../components/NavbarLayout";
import Search from "../components/Search";

import React from "react";

const Dasboard = () => {
  return (
    <div>
      <NavbarLayout />
      <Hero />
      <Search />
      <Footer />
    </div>
  );
};

export default Dasboard;
