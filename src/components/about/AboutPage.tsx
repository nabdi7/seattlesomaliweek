import React from 'react'

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center sm:text-4xl md:leading-tight mb-4">
        About Seattle Somali Week
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Seattle Somali Week is a non-profit organization that aims to bring the
        Somali community together in Seattle. We host events and programs that
        are designed to help the Somali community thrive and grow.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-black text-white rounded-lg p-8 md:w-1/2 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="max-w-md">
            To strengthen the Somali community in Seattle through cultural
            celebration, educational programs, and community-building
            initiatives. We strive to create a platform where Somali heritage
            can be shared, preserved, and celebrated while fostering integration
            and success in the broader Seattle community.
          </p>
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-white text-gray-800 mt-4"
          >
            Learn more
          </button>
        </div>

        <div className="md:w-1/2">
          <div className="mb-8">
            <h4 className="text-xl font-semibold flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Community Events
            </h4>
            <p className="text-gray-600">
              We organize cultural festivals, workshops, and social gatherings
              to bring the Somali community together and share our rich heritage
              with others.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Educational Programs
            </h4>
            <p className="text-gray-600">
              We provide resources and support for education, including language
              classes, tutoring services, and career development workshops.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              Community Support
            </h4>
            <p className="text-gray-600">
              We offer various support services to help Somali immigrants and
              refugees navigate life in Seattle, including assistance with
              housing, healthcare, and employment.
            </p>
          </div>
        </div>
      </div>

      {/* vision right*/}
      <div className="flex flex-col md:flex-row gap-8 py-28">
        <div className="md:w-1/2">
          <div className="mb-8">
            <h4 className="text-xl font-semibold flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Community Events
            </h4>
            <p className="text-gray-600">
              We organize cultural festivals, workshops, and social gatherings
              to bring the Somali community together and share our rich heritage
              with others.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Educational Programs
            </h4>
            <p className="text-gray-600">
              We provide resources and support for education, including language
              classes, tutoring services, and career development workshops.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold flex items-center mb-2">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              Community Support
            </h4>
            <p className="text-gray-600">
              We offer various support services to help Somali immigrants and
              refugees navigate life in Seattle, including assistance with
              housing, healthcare, and employment.
            </p>
          </div>
        </div>
        <div className="bg-black text-white rounded-lg p-8 md:w-1/2 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="max-w-md">
            To strengthen the Somali community in Seattle through cultural
            celebration, educational programs, and community-building
            initiatives. We strive to create a platform where Somali heritage
            can be shared, preserved, and celebrated while fostering integration
            and success in the broader Seattle community.
          </p>
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-white text-gray-800 mt-4"
          >
            Learn more
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default AboutPage