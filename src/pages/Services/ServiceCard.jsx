import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, description, price, _id, img_url } = service;
  return (
    <article className="flex flex-col sm:flex-row bg-white rounded-md shadow-sm overflow-hidden">
      <div className=" sm:basis-56">
        <img
          alt={title}
          src={img_url}
          className="aspect-square h-full w-full object-cover "
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <Link to={`/services/${_id}`}>
            <h3 className="font-bold text-2xl capitalize text-gray-900">
              {title}
            </h3>
          </Link>

          <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <p className="pl-6 mb-5 font-bold text-xl text-gray-900">
            Price: ${price}
          </p>
          <Link
            to={`/services/${_id}`}
            className="block bg-[#1cc65e] px-5 py-3 text-center text-sm font-bold capitalize text-white  transition  hover:bg-green-500"
          >
            Learn more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
