import React from 'react';

const Footer: React.FC = () => {
  const programs = [
    'Data Science & AI',
    'Product Management',
    'Business Analytics',
    'Digital Transformation',
    'Business Management',
    'Project Management',
    'Strategy & Leadership',
    'Senior Management',
    'Fintech'
  ];

  const accredianLinks = [
    'About',
    'Career',
    'Blog',
    'Admission Policy',
    'Referral Policy',
    'Privacy Policy',
    'Terms Of Service',
    'Master FAQs'
  ];

  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">accredian</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Schedule 1-on-1 Call Now
          </button>
        </div>
        
        <hr className="border-gray-700 mb-8" />
        
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            {programs.map((program, index) => (
              <div key={index} className="flex items-center justify-between mb-2">
                <span>{program}</span>
                <span>+</span>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
            <p>Email us (For Product Management Queries):pm@accredian.com</p>
            <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
            <p>Product Management Admission Helpline:+91 9625811095</p>
            <p>Enrolled Student Helpline: +91 7969322507</p>
            <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
            <h4 className="font-bold mt-4">Why Accredian</h4>
            <h4 className="font-bold mt-4">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white">FB</a>
              <a href="#" className="text-white">LI</a>
              <a href="#" className="text-white">TW</a>
              <a href="#" className="text-white">IG</a>
              <a href="#" className="text-white">YT</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Accredian</h3>
            {accredianLinks.map((link, index) => (
              <p key={index} className="mb-2">{link}</p>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;