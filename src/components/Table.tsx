import React, { useState } from 'react'
import circles from '../images/circles.png'
import Button from './Button';
export const ReferralBenefitsSection = () => {
  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      ),
      description: "Submit referrals easily via our website's referral section.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
        </svg>
      ),
      description: "Earn rewards once your referral joins an Accredian program.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      description: "Both parties receive a bonus 30 days after program enrollment.",
    },
  ];

  return (
    <div className="bg-blue-50 p-8">
      <h2 className="text-3xl font-bold text-center mb-12">How Do I Refer?</h2>
      <div className="flex justify-center items-center space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="relative">
              <div className="w-48 h-48 bg-white rounded-full shadow-lg flex flex-col justify-center items-center p-4">
                <div className="text-blue-500 mb-4">{step.icon}</div>
                <p className="text-center text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-8 w-12 h-4">
                  <div className="w-full h-0.5 bg-blue-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-blue-300 rotate-45"></div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="text-center mt-12">
       <Button name={"Refer now"} />
      </div>
    </div>
  );
};

interface Program {
  name: string;
  referrerBonus: number;
  refereeBonus: number;
}
export const Tables = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  
  const programs: Program[] = [
    {
      name: "Professional Certificate Program in Product Management",
      referrerBonus: 7000,
      refereeBonus: 9000
    },
    {
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: 9000,
      refereeBonus: 11000
    },
    {
      name: "Executive Program in Data Driven Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000
    },
    {
      name: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: 10000,
      refereeBonus: 10000
    },
    {
      name: "Executive Program in Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000
    },
    {
      name: "Advanced Certification in Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000
    },
    {
      name: "Executive Program in Product Management and Project Management",
      referrerBonus: 10000,
      refereeBonus: 10000
    },
  ];

  return (
    <div className="flex bg-gray-100 p-4">
      <div className="w-1/4 bg-white rounded-lg shadow-md mr-4">
        <div className="bg-blue-600 text-white p-3 rounded-t-lg">
          ALL PROGRAMS
        </div>
        {['PRODUCT MANAGEMENT', 'STRATEGY & LEADERSHIP', 'BUSINESS MANAGEMENT', 'FINTECH', 'SENIOR MANAGEMENT', 'DATA SCIENCE', 'DIGITAL TRANSFORMATION', 'BUSINESS ANALYTICS'].map((item, index) => (
          <div key={index} className="p-3 border-b flex justify-between items-center">
            {item}
            <span className="text-gray-400">&gt;</span>
          </div>
        ))}
      </div>
      <div className="w-3/4 bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Programs</h2>
          <div className="flex items-center">
            <span className="mr-2">Enrolled</span>
            <button
              className={`w-12 h-6 rounded-full ${isEnrolled ? 'bg-blue-600' : 'bg-gray-300'} relative`}
              onClick={() => setIsEnrolled(!isEnrolled)}
            >
              <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${isEnrolled ? 'right-0.5' : 'left-0.5'}`}></div>
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2 text-left">Programs</th>
              <th className="p-2 text-right">Referrer Bonus</th>
              <th className="p-2 text-right">Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                  {program.name}
                </td>
                <td className="p-2 text-right">₹ {program.referrerBonus.toLocaleString()}</td>
                <td className="p-2 text-right">₹ {program.refereeBonus.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 text-gray-500">
          Show More &#9660;
        </button>
      </div>
    </div>)
}

