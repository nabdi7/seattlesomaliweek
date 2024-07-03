import React from "react";

const Events = () => {
  return (
    <div className="max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold sm:text-4xl md:leading-tight">
          Upcoming Events
        </h2>
        <p className="mt-1 text-gray-600">
          Stay in the know with insights from industry experts.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <a className="group" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="/img1.jpeg"
              alt="Image Description"
            />
          </div>

          <div className="mt-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white">
                EVENT
              </span>
              <span className="text-sm text-gray-500">JUNE 30, 2024</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Seattle Somali Soccer Tournament
            </h3>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        <a className="group" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="/logo.jpg"
              alt="Image Description"
            />
          </div>

          <div className="mt-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white">
                EVENT
              </span>
              <span className="text-sm text-gray-500">JUNE 30, 2024</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Onsite
            </h3>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a>

        {/* <a className="group" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="/logo.jpg"
              alt="Image Description"
            />
          </div>

          <div className="mt-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-500 text-white">
                EVENT
              </span>
              <span className="text-sm text-gray-500">JUNE 30, 2024</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
              Onsite
            </h3>
            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              Read more
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default Events;
