import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios'
import { FaRegCopy } from 'react-icons/fa';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose }) => {
  const [hasReferralCode, setHasReferralCode] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [username, setUsername] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowSuccess(true);
  };
  const getCode = async (email: string) => {
    const response = await axios.post(`${import.meta.env.VITE_API_PREFIX}/generatecode`, {
      email
    })
    console.log(response.data)
    setReferralCode(response.data.referralCode)

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      {hasReferralCode === null ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Do you have a referral code?</h2>
          <div className="space-x-4">
            <button onClick={() => setHasReferralCode(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Yes</button>
            <button onClick={() => setHasReferralCode(false)} className="bg-blue-500 text-white px-4 py-2 rounded">No</button>
          </div>
        </div>
      ) : hasReferralCode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Enter the referral code"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button onClick={() => {
            getCode(email)
          }} type="button" className="w-full bg-blue-500 text-white p-2 rounded" >Generate code</button>
          {referralCode && <div className='flex w-full justify-between items-center px-10'>
            <div >
            {referralCode}
            </div>
            <FaRegCopy onClick={()=>{navigator.clipboard.writeText(referralCode)}}/>
          </div>}
          <input
            type="email"
            placeholder="Enter referrer's email"
            value={referrerEmail}
            onChange={(e) => setReferrerEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
      )}
      {showSuccess && (
        <div className="mt-4 text-center">
          <div className="text-green-500 text-5xl mb-2">✓</div>
          <p className="font-bold">Congrats! You earned {hasReferralCode ? '50' : '2000'} credits</p>
        </div>
      )}
    </Modal>
  );
};

export default ReferralModal;
