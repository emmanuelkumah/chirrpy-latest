import React from "react";
import Hero from "./Hero";
import IntroVid from "./IntroVid";
import UseCases from "./UseCases/UseCases";
import Features from "../Features/Features";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <IntroVid />
      <UseCases />
      <Features />
      <Footer/>
    </>
  );
};

export default Home;
