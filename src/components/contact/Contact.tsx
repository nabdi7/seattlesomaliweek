import React from "react";

const Contact = () => {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <h5 className="mb-4 text-base lg:text-2xl font-bold text-blue-gray-700">
          Customer Care
        </h5>
        <h1 className="mb-4 text-3xl lg:text-5xl font-bold text-blue-gray-700">
          Were Here to Help
        </h1>
        <p className="mb-10 font-normal text-lg lg:mb-20 mx-auto max-w-3xl text-gray-500">
          Whether its a question about our services, a request for technical
          assistance, or suggestions for improvement, our team is eager to hear
          from you.
        </p>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <div className="w-full h-full lg:max-h-[510px]">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172153.33373691145!2d-122.33979794999999!3d47.608715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1720069817178!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>
          <form action="#" className="flex flex-col gap-4 lg:max-w-sm">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-2 text-left font-medium text-gray-900">
                  First Name
                </p>
                <input
                  type="text"
                  placeholder="First Name"
                  name="first-name"
                  className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                />
              </div>
              <div>
                <p className="mb-2 text-left font-medium text-gray-900">
                  Last Name
                </p>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="first-name"
                  className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                />
              </div>
            </div>
            <div>
              <p className="mb-2 text-left font-medium text-gray-900">
                Email
              </p>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
              />
            </div>
            <div>
              <p className="mb-2 text-left font-medium text-gray-900">
                Message
              </p>
              <textarea
                rows={6}
                placeholder="Message"
                name="message"
                className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
