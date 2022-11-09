import React from "react";

const ServiceInfo = ({ serviceData }) => {
  const { title, img_url, price, description, _id } = serviceData;
  return (
    <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 py-10">
      <div className="overflow-hidden rounded-sm">
        <img src={img_url} alt="" className="rounded-sm w-full block" />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl text-[#1cc65e] font-bold ">{title}</h1>
        <p className="text-xl text-gray-700">{description}</p>
        <p className="text-xl font-bold text-gray-900">Price: ${price}</p>
      </div>
    </div>
  );
};

export default ServiceInfo;
