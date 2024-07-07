import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="inline-flex justify-center space-x-8 py-4 bg-gray-100 rounded-lg px-6">
            <a href="#" className="text-blue-500">Refer</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Benefits</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">FAQs</a>
            <a href="#" className="text-gray-700 hover:text-blue-500">Support</a>
        </div>
    );
};

export default Navbar;
