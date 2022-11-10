import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";

import Review from "./Review";

const ReviewSection = ({ serviceId }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useState(() => {
    fetch(`https://consult-review.vercel.app/service/review/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
        console.log(reviews);
      });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const description = form.description.value.replace(/(\r\n|\n|\r)/gm, ""); //removing new line from text

    const data = {
      service_id: serviceId,
      userName: user?.displayName,
      userImg: user?.photoURL,
      userId: user?.uid,
      review: description,
    };
    // console.log(data);

    fetch("https://consult-review.vercel.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        form.reset();
        // toast.success("Service Added Successfully.");
      });
  };

  return (
    <section className="py-5 my-5 ">
      <h3 className="mt-5 text-2xl font-semibold text-gray-800 text-center">
        Clients Reviews About This service:
      </h3>

      <section className="w-full md:w-3/4 mx-auto bg-gray-100 p-5 my-5 rounded">
        {user?.uid ? (
          <form onSubmit={submitHandler}>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="block p-2.5 w-full text-lg text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-[#1cc65e] focus:border-[#1cc65e] "
              placeholder="Write review..."
            ></textarea>
            <button
              type="submit"
              name="review"
              className="py-1 px-3 mt-4  border border-[#1cc65e] text-[#1cc65e] hover:bg-[#1cc65e] hover:text-white transition rounded-md"
            >
              Submit
            </button>
          </form>
        ) : (
          <Link
            to="/login"
            className="bg-gray-200 border-[#1cc65e] border py-5 px-8 text-[#1cc65e] text-xl font-semibold rounded-md block text-center w-3/4 mx-auto hover:bg-gray-100 transition"
          >
            Please Login to write Review
          </Link>
        )}
        <section className="space-y-4 mt-10">
          {reviews.length === 0 ? (
            <p className="text-lg text-gray-600 text-center">
              No review found, please give review{" "}
            </p>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <Review key={review._id} review={review} />
              ))}
            </div>
          )}
        </section>
      </section>
    </section>
  );
};

export default ReviewSection;
