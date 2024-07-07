import React from 'react';
import logo from '../images/logo.png';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap justify-between items-center p-4 shadow-md bg-white">
      <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
        <img src={logo} alt="Accredian Logo" className="h-8" />
        <button 
          id="dropdownDefaultButton" 
          data-dropdown-toggle="dropdown" 
          className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Courses <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Course 1</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Course 2</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Course 3</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Course 4</a></li>
          </ul>
        </div>
      </div>
      
      <nav className="flex flex-col sm:flex-row items-center w-full sm:w-auto sm:ml-96">
        <a href="#" className="mx-2 text-gray-700 hover:text-blue-500">Refer & Earn</a>
        <a href="#" className="mx-2 text-gray-700 hover:text-blue-500">Resources</a>
        <a href="#" className="mx-2 text-gray-700 hover:text-blue-500">About Us</a>
      </nav>
      
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <button className="mr-2 mb-2 sm:mb-0 text-gray-700 hover:text-blue-500 rounded px-4 py-2">Login</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Try for free</button>
      </div>
    </header>
  );
};

export default Header;
