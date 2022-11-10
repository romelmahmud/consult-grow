import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../shared/Container/Container";
import { toast } from "react-hot-toast";

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);
  const [review, setReview] = useState({});

  useEffect(() => {
    fetch(`https://consult-review.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReview(data.data);
      });
  }, [id]);

  const updateHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const description = form.description.value.replace(/(\r\n|\n|\r)/gm, "");
    fetch(`https://consult-review.vercel.app/review/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        review: description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("review updated Successfully");
        navigate("/userreviews");
      });
  };
  return (
    <Container>
      <div className="h-screen flex justify-center items-center max-w-2xl">
        <form onSubmit={updateHandler}>
          <textarea
            id="description"
            name="description"
            // value={review?.review}
            rows="4"
            className="block p-2.5 w-full text-lg text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-[#1cc65e] focus:border-[#1cc65e] "
            placeholder={review?.review}
          ></textarea>
          <button
            type="submit"
            name="review"
            className="py-1 px-3 mt-4  border border-[#1cc65e] text-[#1cc65e] hover:bg-[#1cc65e] hover:text-white transition rounded-md"
          >
            Update
          </button>
        </form>
      </div>
    </Container>
  );
};

export default UpdateReview;
