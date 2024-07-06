import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>("experience");

  const questions = [
    {
      id: "experience",
      question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work."
    },
    {
      id: "system",
      question: "What is the minimum system configuration required?",
      answer: "" // Add the answer here when available
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      
      <div className="flex mb-8">
        <div className="w-1/3 pr-4">
          <button className="w-full bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow mb-4">
            Eligibility
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded mb-4">
            How To Use?
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded">
            Terms & Conditions
          </button>
        </div>
        
        <div className="w-2/3">
          {questions.map((q) => (
            <div key={q.id} className="mb-4">
              <button
                className="w-full text-left font-semibold py-2 px-4 bg-white rounded shadow flex justify-between items-center"
                onClick={() => setOpenQuestion(openQuestion === q.id ? null : q.id)}
              >
                {q.question}
                <span>{openQuestion === q.id ? '▲' : '▼'}</span>
              </button>
              {openQuestion === q.id && (
                <div className="mt-2 p-4 bg-white rounded shadow">
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-500 text-white rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-white p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg">Want to delve deeper into the program?</h3>
            <p>Share your details to receive expert insights from our program team!</p>
          </div>
        </div>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded">
          Get in touch →
        </button>
      </div>
    </div>
  );
};

export default FAQSection;