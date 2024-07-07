import React, { useState } from 'react';
import ReferralModal from './ReferralModal';

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="px-12 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowModal(true)}
      >
        {name}
      </button>
      {showModal && <ReferralModal isOpen={true} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Button;
