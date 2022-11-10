import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>404 Page not found</title>
      </Helmet>
      <div class="grid h-screen place-content-center ">
        <p class="uppercase tracking-widest text-red-600-500">
          404 | Not Found
        </p>
        <div>
          <Link
            to={`/`}
            className="mt-6 inline-block gap-1 text-md font-medium hover:text-[#1cc65e] border-2 px-3 py-1 rounded border-[#1cc65e] bg-[#1cc65e] hover:bg-gray-50 text-white transition "
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
