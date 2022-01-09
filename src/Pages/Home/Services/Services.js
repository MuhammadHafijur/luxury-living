import React from "react";
import officeLogo from './office.png'
import showroomLogo from './showroom.png'
import residentialLogo from './residential.png'

const Services = () => {
  return (
    <div>
      <section className="w-5/6 mx-auto text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
          <p className="text-xl font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto my-2 text-indigo-900">
            Service
            </p>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            We're an agency tailored to all <br />
clients' needs that always delivers
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-900 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                <img src={officeLogo} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                Office Interior Design
                </h2>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                $299
                </h2>
                <p className="leading-relaxed text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center shadow-xl rounded-md">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                <img src={showroomLogo} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                Showroom Design
                </h2>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                $399
                </h2>
                <p className="leading-relaxed text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
                <img src={residentialLogo} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                Residential/ Home
                </h2>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                $499
                </h2>
                <p className="leading-relaxed text-base">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 text-lg">
            Explore More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
