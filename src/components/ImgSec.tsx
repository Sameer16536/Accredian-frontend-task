import React from 'react';
import logo2 from '../images/logo2.png';
import Button from './Button';
import money from '../images/money.png';

const ImgSec: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 pt-8">
      <div className="w-[1360px] h-[692px] bg-white rounded-[29px] shadow-lg overflow-hidden relative">
        <div className="flex h-full">
          {/* Left content */}
          <div className="w-1/2 p-16 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">Let's Learn <br /> & Earn</h1>
            <p className="text-2xl mb-8">
              Get a chance to win <br />
              up to <span className="text-blue-600 font-bold">Rs. 15,000</span>
            </p>
            <Button name="Refer Now" />
          </div>

          {/* Right content */}
          <div className="w-1/2 relative flex items-center justify-center">
            <img
              src={logo2}
              alt="Phone showing app with happy people"
              className="max-w-full max-h-full object-contain"
            />
            {/* Decorative money images */}
            <img src={money} alt="" className="absolute top-8 left-8 w-16" />
            <img src={money} alt="" className="absolute top-8 right-8 w-16" />
            <img src={money} alt="" className="absolute bottom-8 left-1/4 w-16" />
            <img src={money} alt="" className="absolute bottom-8 right-1/4 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgSec;
