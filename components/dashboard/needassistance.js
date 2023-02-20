import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaFlag } from 'react-icons/fa';

const NeedAssistance = () => {
  const numbers = [
    { country: 'USA', flag: '🇺🇸', phone: '+1-555-1234' },
    { country: 'UK', flag: '🇬🇧', phone: '+44-123-456789' },
    { country: 'Australia', flag: '🇦🇺', phone: '+61-2-98765432' },
  ];

  return (
    <div className='flex justify-center space-x-4 bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-lg'>
      {numbers.map((number) => (
        <div key={number.country} className='flex items-center text-white'>
          <FaFlag className='mr-2 text-xl' />
          <div>
            <div className='font-bold'>{number.country}</div>
            <a href={`tel:${number.phone}`} className='flex items-center'>
              <FiPhone className='mr-2' />
              <div className='font-medium'>{number.phone}</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NeedAssistance;
