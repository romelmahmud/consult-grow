import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
import Container from "../../shared/Container/Container";
import ServiceInfo from "./ServiceInfo";
import ReviewSection from "./ReviewSection";

const Service = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    document.title = serviceData?.title;
  }, [serviceData]);

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
        <section className="py-5 px-8 my-10 bg-white rounded-sm shadow-md ">
          <ServiceInfo serviceData={serviceData} />
          <ReviewSection />
        </section>
      )}
    </Container>
  );
};

export default Service;
