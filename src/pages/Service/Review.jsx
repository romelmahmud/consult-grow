import React from "react";

const Review = () => {
  return (
    <div className=" rounded-md">
      <div className="flex space-x-4 p-5 bg-gray-200 border-2 border-gray-300 rounded-t-sm ">
        <img
          src=""
          alt=""
          className="block h-12 w-12 rounded-full bg-gray-800"
        />
        <p className="text-xl font-semibold capitalize text-gray-900">
          User name
        </p>
      </div>
      <div className="h-20 w-full bg-gray-100 p-5 border-b-2 border-x-2"></div>
    </div>
  );
};

export default Review;
