import React from "react";
import { Link } from "react-router-dom";

const SingleReview = ({ userReview, handleDelete }) => {
  const { _id, serviceTitle, review } = userReview;

  return (
    <div className="p-5 m-5 bg-white rounded-sm border w-3/4 md:w-1/2 mx-auto">
      <p className="text-xl font-bold text-gray-900 capitalize">
        Service: {serviceTitle}
      </p>
      <p className="text-md my-2 font-medium text-gray-600">Review: {review}</p>
      <div>
        <Link
          to="/updatereview"
          className="bg-green-200 py-1 px-3 rounded text-green-600 mr-3"
        >
          update
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-200 py-1 px-3 rounded text-red-600 "
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default SingleReview;
