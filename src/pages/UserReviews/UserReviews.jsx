import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/auth/AuthContext";
import Container from "../../shared/Container/Container";
import SingleReview from "./SingleReview";
import { toast } from "react-hot-toast";

const UserReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://consult-review.vercel.app/review/user/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.data));
  }, [user]);

  const handleDelete = (id) => {
    fetch(`https://consult-review.vercel.app/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        fetch(`https://consult-review.vercel.app/review/user/${user?.uid}`)
          .then((res) => res.json())
          .then((data) => setReviews(data.data));
        toast.success("review deleted Successfully");
      });
  };
  return (
    <>
      <Helmet>
        <title>User Review | Consult & Grow</title>
      </Helmet>
      <Container>
        <section className="py-10 md:py-12 my-5 md:my-8">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            My Reviews
            <span className="text-[#1cc65e] text-5xl ml-1 ">.</span>
          </h2>
          <div className="">
            {reviews?.map((review) => (
              <SingleReview
                key={review.id}
                userReview={review}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};

export default UserReviews;
