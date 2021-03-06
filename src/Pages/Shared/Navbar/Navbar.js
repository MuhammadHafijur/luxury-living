import React from 'react';
import navLogo from './navbar-logo.png';

const Navbar = () => {
    return (
        <div className="bg-gray-200">
            <header className="w-5/6 mx-auto text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="w-24" src={navLogo} alt="" />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About Us</a>
      <a className="mr-5 hover:text-gray-900">Projects</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
      <a className="mr-5 hover:text-gray-900">Admin</a>
    </nav>
    <button className="inline-flex items-center bg-indigo-900  text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
        </div>
    );
};

export default Navbar;