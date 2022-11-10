import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Container from "../../shared/Container/Container";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://consult-review.vercel.app/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>All Services | Consult & Grow</title>
      </Helmet>
      <Container>
        <section className="py-10 md:py-12 my-5 md:my-8">
          <h2 className="text-5xl font-bold text-center text-gray-900">
            My All Services
            <span className="text-[#1cc65e] text-6xl ml-1 ">.</span>
          </h2>

          {loading ? (
            <div className="py-20  my-5  flex justify-center items-center">
              <Spinner size="xl" color="success" />
            </div>
          ) : (
            <section className="py-10  my-5  grid gap-8 grid-cols-1 lg:grid-cols-2 ">
              {services?.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </section>
          )}
        </section>
      </Container>
    </>
  );
};

export default Services;
