import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-blue-500">Course Content</a></li>
            <li className="mb-2"><a href="#" className="hover:text-blue-500">Join as affiliate</a></li>
            <li className="mb-2"><a href="#" className="hover:text-blue-500">Download Brochure</a></li>
            <li className="mb-2"><a href="#" className="hover:text-blue-500">Share your feedback</a></li>
            <li className="mb-2"><a href="#" className="hover:text-blue-500">FAQ</a></li>
          </ul>
        </div>
        <div className="w-1/3 text-center">
          <h3 className="text-xl font-bold mb-4">Our Address</h3>
          <p className="mb-2">Accredian Private Limited</p>
          <p className="mb-2">Thakoor House, 2nd Floor, 61/62 C</p>
          <p className="mb-2">Azad Nagar, Andheri West</p>
          <p className="mb-2">Mumbai, Maharashtra 400053</p>
          <p className="mb-2">India</p>
        </div>
        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
