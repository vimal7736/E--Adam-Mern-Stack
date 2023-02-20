import { useState } from 'react';

const countries = [
  'United States',
  'Canada',
  'Mexico',
  'United Kingdom',
  'Germany',
  'France',
  'Japan',
  'China',
  // add more countries as needed
];

export default function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className='relative'>
      <select
        id='country'
        name='country'
        value={selectedCountry}
        onChange={handleCountryChange}
        className='border border-gray-500 py-2 px-3 appearance-none w-full leading-tight focus:outline-none focus:shadow-outline'
        required
      >
        <option value=''>--Select a Country--</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
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
