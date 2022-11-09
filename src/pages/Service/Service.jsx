import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
import Container from "../../shared/Container/Container";
import ServiceInfo from "./ServiceInfo";

const Service = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://consult-review.vercel.app/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <Container>
      {loading ? (
        <div className="py-20  my-5  flex justify-center items-center">
          <Spinner size="xl" color="success" />
        </div>
      ) : (
        <section className="py-10  my-5  ">
          <ServiceInfo serviceData={serviceData} />
        </section>
      )}
    </Container>
  );
};

export default Service;
