import React from 'react';
import logo2 from '../images/logo2.png';
import Button from './Button';

const ImgSec: React.FC = () => {
  return (
    <section className="flex justify-between items-center bg-white p-8">
      <div>
        <h1 className="text-4xl font-bold">Let's Learn <br /> & Earn</h1>
        <p className="mt-4 text-xl">Get a chance to win up-to Rs. 15,000</p>
        <Button name={"Refer now"} />
      </div>
      <div>
        <img src={logo2} alt="Learn and Earn" className="h-80" />
      </div>
    </section>
  );
};

export default ImgSec;
