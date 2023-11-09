import React from "react";

import {
  Features,
  Hero,
  IntroVid,
  Navbar,
  UseCases,
  Footer,
} from "../components/pages/Home";

const Root = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroVid />
      <UseCases />
      <Features />
      <Footer />
    </>
  );
};

export default Root;
