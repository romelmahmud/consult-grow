import React from "react";

const Testimonials = () => {
  return (
    <section className="py-10 md:py-12 my-5 md:my-8 ">
      <h2 className="text-5xl font-bold text-center text-gray-900">
        What My Clients Say
        <span className="text-[#1cc65e] text-6xl ml-1 ">?</span>
      </h2>
      <section className="py-10  my-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white pt-4 shadow-lg rounded-md">
          <img
            alt="Donald Simpson"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="mx-auto h-24 w-24 rounded-full object-cover shadow-lg"
          />

          <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center ">
            <p class="text-lg font-bold text-gray-700">Donald Simpson</p>
            <p class="mt-1 text-xs font-medium text-gray-500">
              Chief Financial Officer, Jamaica International
            </p>
            <p class="mt-4 text-sm text-gray-500">
              When you are in the financial industry you know the image you have
              to project to people. You have to be agile and authoritative;
              Consulting with Romel is the way to go for financial institutions.
            </p>
          </blockquote>
        </div>
        <div className="bg-white pt-4 shadow-lg rounded-md">
          <img
            alt="Cint Le Corre"
            src="https://images.pexels.com/photos/3973335/pexels-photo-3973335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="mx-auto h-24 w-24 rounded-full object-cover shadow-lg"
          />

          <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center ">
            <p class="text-lg font-bold text-gray-700">Cint Le Corre</p>
            <p class="mt-1 text-xs font-medium text-gray-500">
              Chairman, Harmony Corporation
            </p>
            <p class="mt-4 text-sm text-gray-500">
              We thought a lot before choosing the Consulting because we wanted
              to sure our investment would yield results. This was clearly the
              best choice.
            </p>
          </blockquote>
        </div>
        <div className="bg-white pt-4 shadow-lg rounded-md">
          <img
            alt="Kampus Sorger"
            src="https://images.pexels.com/photos/7893740/pexels-photo-7893740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="mx-auto h-24 w-24 rounded-full object-cover shadow-lg"
          />

          <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center ">
            <p class="text-lg font-bold text-gray-700">Kampus Sorger</p>
            <p class="mt-1 text-xs font-medium text-gray-500">
              Chairman, Kreutz Airlines
            </p>
            <p class="mt-4 text-sm text-gray-500">
              The demands for financial institutions have changed a bit.
              Obfuscation is no longer accepted, But Consulting with Romel is so
              perfect.
            </p>
          </blockquote>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
