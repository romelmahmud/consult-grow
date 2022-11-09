import React from "react";
import image from "../../../../assets/image/consulting01.jpg";

const About = () => {
  return (
    <section className="py-10 md:py-12 my-5 md:my-8 bg-white px-10 rounded-md shadow">
      <h2 className="text-5xl font-bold text-center text-gray-900">
        About Me<span className="text-[#1cc65e] text-6xl ml-1 ">.</span>
      </h2>
      <section className="flex flex-col md:flex-row gap-8 justify-between items-center py-10  my-5 ">
        <div className="md:w-1/2">
          <img
            className="w-full block rounded-md shadow-sm"
            src={image}
            alt="Businessmen"
          />
        </div>
        <div className="md:w-1/2 space-y-5">
          <p className="  text-lg  text-gray-600 ">
            I am a, certified business consultant. I offer consulting, ideas and
            resources for people or company to grow their business.
          </p>
          <p className="  text-lg  text-gray-600">
            I counsel my clients on their key strategic issues, leveraging my
            deep industry expertise and using analytical rigor to help them make
            informed decisions more quickly and solve their toughest and most
            critical business problems.
          </p>
          <p className=" text-lg  text-gray-600">
            I am driven to do the best job possible. I've pride on myself for
            cultivating lasting client relationships built on trust and mutual
            respect.
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;
