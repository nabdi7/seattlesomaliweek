import React from "react";
import Menu from "../menu/Menu";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav
        className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto"
        aria-label="Global"
      >
        <div className="md:col-span-3">
          <a
            className="flex-none text-xl font-semibold text-black"
            href="/"
            aria-label="Logo"
          >
            <Image
              src="/logo.jpg"
              alt="Seattle Somali Week"
              width={100}
              height={100}
            />
            {/* Seattle Somali Week */}
          </a>
        </div>

        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button
            type="button"
            className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-gray-200 "
          >
            Donate
          </button>
          <button
            type="button"
            className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-gray-800 text-white hover:bg-gray-900 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-800"
          >
            Sponsor
          </button>

          <div className="md:hidden">
            <Menu />
          </div>
        </div>

        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            {/* <div>
          <a className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400" href="#" aria-current="page">Work</a>
        </div> */}
            <div>
              <a
                className="inline-block text-black hover:text-gray-600 dark:hover:text-neutral-300"
                href="/about"
              >
                About
              </a>
            </div>
            <div>
              <a
                className="inline-block text-black hover:text-gray-600 dark:hover:text-neutral-300"
                href="/events"
              >
                Events
              </a>
            </div>
            <div>
              <a
                className="inline-block text-black hover:text-gray-600 dark:hover:text-neutral-300"
                href="/sponsors"
              >
                Sponsors
              </a>
            </div>
            <div>
              <a
                className="inline-block text-black hover:text-gray-600 dark:hover:text-neutral-300"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
