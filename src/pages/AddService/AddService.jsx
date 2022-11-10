import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";

const AddService = () => {
  const navigate = useNavigate();
  const url = "https://consult-review.vercel.app/service";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const imgUrl = form.imgUrl.value;
    const price = form.price.value;
    const description = form.description.value;

    console.log(title, imgUrl, price, description);

    const data = {
      title,
      img_url: imgUrl,
      price,
      description,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        form.reset();
        toast.success("Service Added Successfully.");
        navigate("/services");
      });
  };

  return (
    <>
      <Helmet>
        <title>Add service | Consult & Grow</title>
      </Helmet>
      <section className="bg-gray-100 py-10">
        <div className="flex justify-center items-center  max-w-4xl mx-auto ">
          <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-10 lg:px-10 xl:col-span-6   rounded-md bg-white shadow-xl w-full">
            <div className="">
              <div className="flex items-center justify-center mb-6">
                <h1 className="text-4xl  font-semibold text-center  text-gray-800">
                  Add a Service
                </h1>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-4 grid grid-cols-12 gap-6"
              >
                <div className="col-span-12">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    placeholder="Title"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-lg text-gray-700 shadow-sm focus:ring-[#1cc65e] active:ring-[#1cc65e] focus:border-[#1cc65e] "
                  />
                </div>
                <div className="col-span-12">
                  <input
                    type="text"
                    id="imgUrl"
                    name="imgUrl"
                    placeholder="Image url"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-lg text-gray-700 shadow-sm focus:ring-[#1cc65e] active:ring-[#1cc65e] focus:border-[#1cc65e] "
                  />
                </div>
                <div className="col-span-6">
                  <input
                    type="number"
                    id="price"
                    name="price"
                    required
                    placeholder="Price"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-lg text-gray-700 shadow-sm focus:ring-[#1cc65e] active:ring-[#1cc65e] focus:border-[#1cc65e] "
                  />
                </div>

                <div className="col-span-12 ">
                  <textarea
                    id="description"
                    name="description"
                    rows="6"
                    className="block p-2.5 w-full text-lg text-gray-900 bg-gray-100 rounded-lg border border-gray-200 focus:ring-[#1cc65e] focus:border-[#1cc65e] "
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="col-span-6">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md bottom-1 border-2 border-gray-300 bg-white px-8 py-3 text-md font-medium text-gray-500 transition hover:bg-[#1cc65e] hover:border-[#1cc65e] hover:text-white focus:outline-none focus:ring active:text-[#1cc65e] "
                  >
                    Add Service
                  </button>
                </div>
              </form>
              <hr className="mt-6 border-gray-300 border" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddService;
