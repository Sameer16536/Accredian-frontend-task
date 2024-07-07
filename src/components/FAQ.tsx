import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>("experience");
  const [activeTab, setActiveTab] = useState("Eligibility");

  const questions = [
    {
      id: "experience",
      question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work."
    },
    {
      id: "system",
      question: "What is the minimum system configuration required?",
      answer: "A standard computer with internet access is sufficient for most of our programs. Specific requirements, if any, will be communicated before the course starts."
    }
  ];

  const tabs = ["Eligibility", "How To Use?", "Terms & Conditions"];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      
      <div className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`w-full text-left py-2 px-4 rounded mb-2 ${
                activeTab === tab ? "bg-white text-blue-500 shadow" : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="w-full md:w-2/3">
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
      
      <div className="bg-blue-500 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-white p-2 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg">Got any questions?</h3>
            <p>Contact us at +91-7414979320</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100">Contact Us</button>
      </div>
    </div>
  );
};

export default FAQSection;
