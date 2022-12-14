import React from "react";
import image from "../../../../assets/image/businessman.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 justify-between items-center py-10 md:py-16 my-5 md:my-10">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          <span className="text-[#1cc65e]">Grow</span> Your Business
        </h1>

        <p className="mt-8 md:mt-10 text-lg md:text-xl text-gray-800 font-medium">
          I've over 10 years of experience helping business for finding perfect
          solution.
        </p>
        <Link
          to={`/services`}
          className="  group mt-6  inline-flex items-center gap-1 text-xl font-medium hover:text-[#1cc65e] border-2 px-7 py-3 rounded border-[#1cc65e] bg-[#1cc65e] hover:bg-gray-50 text-white transition "
        >
          My Services
        </Link>
      </div>

      <div className="md:w-1/2">
        <img
          className="w-full block rounded-md shadow-lg"
          src={image}
          alt="Businessmen"
        />
      </div>
    </section>
  );
};

export default Banner;
