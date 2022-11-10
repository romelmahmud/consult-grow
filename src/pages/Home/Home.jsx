import React from "react";
import Container from "../../shared/Container/Container";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Consult & Grow</title>
      </Helmet>
      <Container>
        <Banner />
        <Services />
        <About />
        <Testimonials />
      </Container>
    </>
  );
};

export default Home;
