import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, description, price, img_url } = service;
  return (
    <article className="bg-white overflow-hidden rounded-lg border border-gray-100 shadow-sm">
      <img alt={title} src={img_url} className="h-56 w-full object-cover" />

      <div className="p-4 sm:p-6">
        <Link to={`/services/${_id}`}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-5">{title}</h3>
        </Link>
        <p className="text-lg font-bold text-green-600">${price}</p>

        <p className="mt-2 text-md leading-relaxed text-gray-700 line-clamp-3">
          {description}
        </p>

        <Link
          to={`/services/${_id}`}
          className="group mt-4 inline-flex items-center gap-1 text-lg font-medium text-[#1cc65e] border-2 px-3 py-1 rounded border-[#1cc65e] hover:bg-[#1cc65e] hover:text-white transition "
        >
          Learn more
        </Link>
      </div>
    </article>
  );
};

export default Service;
