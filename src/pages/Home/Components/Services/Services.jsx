import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://consult-review.vercel.app/limitservice")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <section className="py-10 md:py-16 my-5 md:my-10">
      <h2 className="text-5xl font-bold text-center text-gray-900">
        My Services<span className="text-[#1cc65e] text-6xl ml-1 ">.</span>
      </h2>
      <section className="py-10 6 my-5  grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </section>

      <div className="flex justify-center">
        <Link
          to={`/services`}
          className="  group  inline-flex items-center gap-1 text-xl font-medium hover:text-[#1cc65e] border-2 px-7 py-3 rounded border-[#1cc65e] bg-[#1cc65e] hover:bg-white text-white transition "
        >
          All Services
        </Link>
      </div>
    </section>
  );
};

export default Services;
