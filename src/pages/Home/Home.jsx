import React from "react";
import Container from "../../shared/Container/Container";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Services />
    </Container>
  );
};

export default Home;
