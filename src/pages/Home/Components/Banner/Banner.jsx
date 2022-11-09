import React from "react";
import image from "../../../../assets/image/businessman.jpg";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between items-center py-10 md:py-16 my-5 md:my-10">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          <span className="text-[#1cc65e]">Grow</span> Your Business
        </h1>

        <p className="mt-8 md:mt-10 text-lg md:text-xl text-gray-800 font-medium">
          I've over 10 years of experience helping business for finding perfect
          solution.
        </p>
      </div>

      <div className="md:w-1/2">
        <img
          className="w-full block rounded-md shadow-lg"
          src={image}
          alt="Businessmen"
        />
      </div>
    </div>
  );
};

export default Banner;
