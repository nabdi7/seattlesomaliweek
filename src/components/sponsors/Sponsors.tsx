import React from "react";

const Sponsors = () => {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center grid place-content-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:leading-tight">
          Our Sponsors
        </h2>
        <p className="text-blue-gray font-semibold text-base lg:text-lg">
          More than 50+ brands trust us
        </p>
        <h1 className="my-4 text-2xl leading-snug lg:text-3xl text-blue-gray">
          Trusted by Leading Brands
        </h1>
        <p className="mx-auto max-w-5xl text-gray-500 lg:px-8 mb-10">
          From innovative startups to Fortune 500 companies, our client list
          spans a spectrum of sectors, each with unique challenges that
          we&apos;ve successfully navigated.
        </p>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="bg-[#FAFAFA] px-10 shadow-none">
              <div className="p-4">
                <img
                  src="https://www.material-tailwind.com/logos/logo-coinbase.svg"
                  alt="logo"
                  className="w-40"
                />
                <p className="text-gray-500 font-normal">coinbase.com</p>
              </div>
            </div>
            <div className="bg-[#FAFAFA] px-10 shadow-none">
              <div className="p-4">
                <img
                  src="https://www.material-tailwind.com/logos/logo-amazon.svg"
                  alt="logo"
                  className="w-40"
                />
                <p className="text-gray-500 font-normal">amazon.com</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FAFAFA] lg:px-10 shadow-none justify-center max-w-[18rem] lg:max-w-lg">
            <div className="text-center p-4">
              <img
                src="https://www.material-tailwind.com/logos/logo-netflix.svg"
                alt="logo"
                className="w-40 mx-auto"
              />
              <p className="text-gray-500 font-normal mb-4">netflix.com</p>
              <p className="text-blue-gray font-normal lg:max-w-[16rem]">
                &quot;It has broadened our horizons and helped me advance my
                career. The community is incredibly supportive.&quot;
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="bg-[#FAFAFA] px-10 shadow-none">
              <div className="p-4">
                <img
                  src="https://www.material-tailwind.com/logos/logo-spotify.svg"
                  alt="logo"
                  className="w-40"
                />
                <p className="text-gray-500 font-normal">spotify.com</p>
              </div>
            </div>
            <div className="bg-[#FAFAFA] px-10 shadow-none">
              <div className="p-4">
                <img
                  src="https://www.material-tailwind.com/logos/logo-google.svg"
                  alt="logo"
                  className="w-40"
                />
                <p className="text-gray-500 font-normal">google.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 mx-auto flex justify-center">
        <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">
          see all sponsors
        </button>
      </div>
    </section>
    
  );
};

export default Sponsors;
