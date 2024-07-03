import React from "react";

const Cta = () => {
  return (
    <section className="py-28 bg-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Support Seattle Somali Week
          </h3>
          <p className="mt-3 text-gray-600">
            Help us strengthen the Somali community in Seattle through cultural
            celebration, educational programs, and community-building
            initiatives.
          </p>
        </div>
        <div className="flex gap-3 items-center mt-4 md:justify-center">
          <button
            type="button"
            className="py-2 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-gray-200 "
          >
            Donate
          </button>
          <button
            type="button"
            className="py-2 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-gray-800 text-white hover:bg-gray-900 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-800"
          >
            Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
