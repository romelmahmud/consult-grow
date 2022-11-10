import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";

const ReviewSection = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="py-5 my-5 ">
      <h3 className="mt-5 text-2xl font-semibold text-gray-800 text-center">
        Clients Reviews About This service:
      </h3>
      <section className="w-full md:w-3/4 mx-auto bg-gray-100 p-5 my-5 rounded">
        {user?.uid ? (
          <form>
            <textarea
              id="review"
              rows="4"
              className="block p-2.5 w-full text-lg text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-[#1cc65e] focus:border-[#1cc65e] "
              placeholder="Write review..."
            ></textarea>
          </form>
        ) : (
          <Link
            to="/login"
            className="bg-gray-200 border-[#1cc65e] border py-5 px-8 text-[#1cc65e] text-xl font-semibold rounded-md block text-center w-3/4 mx-auto hover:bg-gray-100 transition"
          >
            Please Login to write Review
          </Link>
        )}
      </section>
    </section>
  );
};

export default ReviewSection;
