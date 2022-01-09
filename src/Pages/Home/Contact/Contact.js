import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="w-3/5 mx-auto my-8 flex flex-col px-4 py-8 bg-white dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <span className="justify-center text-xl mb-2 text-center text-indigo-900 font-semibold flex-items-center dark:text-gray-400">
          Contact
        </span>
        <div className="mb-2 text-center sm:text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
         <span>Let us handle your</span><br />
         <span>project, professionally.</span> 
        </div>
        <div className="p-6 mt-8">
          <form action="#">
            <div className="flex gap-4 mb-6">
              <div className=" relative w-1/2">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                  name="First name"
                  placeholder="First name"
                />
              </div>
              <div className=" relative w-1/2">
                <input
                  type="text"
                  id="create-account-last-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                  name="Last name"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <div className=" relative w-1/2">
                <input
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                  name="Email Address"
                  placeholder="Email Address"
                />
              </div>
              <div className=" relative w-1/2">
                <input
                  type="text"
                  id="create-account-last-name"
                  className="rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                  name="Phone Number"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="name">
                <textarea
                  className="flex-1 appearance-none w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                  id="comment"
                  placeholder="Your Message"
                  name="comment"
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>
            <div className="flex w-1/4 mx-auto my-4">
              <button
                type="submit"
                className="py-4 px-4 bg-indigo-900 hover:bg-indigo-800 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-normal shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
