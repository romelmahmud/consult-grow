import React from "react";
import Container from "../../shared/Container/Container";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Services />
      <About />
    </Container>
  );
};

export default Home;
