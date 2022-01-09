import React from "react";
import imageOne from "./project-1.png";
import imageTwo from "./project-2.png";
import imageThree from "./project-3.png";

const Projects = () => {
  return (
    <div>
      <section className="w-5/6 mx-auto text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center my-8">
            <p className="text-2xl text-indigo-900 my-1">Projects</p>
            <h1 className="text-3xl text-gray-800 font-semibold">
              Discover the latest Interior Design <br /> available today
            </h1>
          </div>
          <div className="flex flex-wrap text-center sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-md h-80 w-full overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={imageOne}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Villa on Washington Avenue
              </h2>
              <p className="text-base leading-relaxed flex justify-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Dhaka, Bangladesh
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-md overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-80 w-full"
                  src={imageTwo}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Luxury villa in Rego Park
              </h2>
              <p className="text-base leading-relaxed flex justify-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Dhaka, Bangladesh
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-md overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-80 w-full"
                  src={imageThree}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Gorgeous house
              </h2>
              <p className="text-base leading-relaxed flex justify-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
