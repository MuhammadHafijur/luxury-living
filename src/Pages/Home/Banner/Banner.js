import React from "react";
import bannerImg from './banner-img.png'

const Banner = () => {
  return (
    <div>
      <section className="w-5/6 mx-auto text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We Build
              <br className="hidden lg:inline-block" />
              Your Dream
            </h1>
            <p className="mb-8 leading-relaxed">
              Online Easte Agency, the mordern way to sell your own home, You
              can use Griffin Residential to market your property
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Booking
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={bannerImg}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
