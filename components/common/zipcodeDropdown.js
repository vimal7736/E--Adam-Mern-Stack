import { useState } from 'react';

const zipCodes = [
  '10001',
  '10002',
  '10003',
  '10004',
  '10005',
  '10006',
  '10007',
  '10008',
  // add more zip codes as needed
];

export default function ZipCodeDropdown() {
  const [selectedZipCode, setSelectedZipCode] = useState('');

  const handleZipCodeChange = (event) => {
    setSelectedZipCode(event.target.value);
  };

  return (
    <div className='relative'>
      <select
        id='zipCode'
        name='zipCode'
        value={selectedZipCode}
        onChange={handleZipCodeChange}
        className='border border-gray-500 py-2 px-3 appearance-none w-full leading-tight focus:outline-none focus:shadow-outline'
        required
      >
        <option value=''>--Select a Zip Code--</option>
        {zipCodes.map((zipCode) => (
          <option key={zipCode} value={zipCode}>
            {zipCode}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9 11l5-5-5-5v10z' fillRule='evenodd' clipRule='evenodd' />
        </svg>
      </div>
    </div>
  );
}
