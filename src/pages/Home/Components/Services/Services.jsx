import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://consult-review.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <section className="py-10 md:py-16 my-5 md:my-10">
      <h2 className="text-5xl font-bold text-center text-gray-900">
        My Services<span className="text-green-600 text-6xl ml-1 ">.</span>
      </h2>
      <section className="py-10 md:py-16 my-5 md:my-10">
        {services?.map((service) => (
          <li key={service._id}>{service?.title}</li>
        ))}
      </section>
    </section>
  );
};

export default Services;
