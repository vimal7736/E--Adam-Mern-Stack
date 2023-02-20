import Link from 'next/link';
import { useState } from 'react';
import CargoDropdown from './dashboard/cargodropdown';

const origins = [
  { label: 'New York', value: 'NY' },
  { label: 'Los Angeles', value: 'LA' },
  { label: 'Chicago', value: 'CHI' },
];

const destinations = [
  { label: 'Miami', value: 'MIA' },
  { label: 'San Francisco', value: 'SF' },
  { label: 'Seattle', value: 'SEA' },
];

export default function LandingForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  // const [weight, setWeight] = useState('');
  const [shippingRate, setShippingRate] = useState(null);

  const handleSearchRates = () => {
    // Call an API or perform some calculations to get the shipping rate
    const rate = 100;
    setShippingRate(rate);
  };

  return (
    <div className='bg-gray-100 p-10'>
      <h1 className='text-3xl font-bold text-center mb-4'>
        Best Prices For Your Shipment
      </h1>
      <form className='flex flex-col items-center'>
        <label htmlFor='origin' className='mt-4 mb-2 font-bold'>
          Origin:
        </label>
        <select
          id='origin'
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className='p-2 border border-gray-400 rounded-md'
        >
          <option value=''>Select an origin</option>
          {origins.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <label htmlFor='destination' className='mt-4 mb-2 font-bold'>
          Destination:
        </label>
        <select
          id='destination'
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className='p-2 border border-gray-400 rounded-md'
        >
          <option value=''>Select a destination</option>
          {destinations.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        <label htmlFor='destination' className='mt-4 mb-2 font-bold'>
          Cargo:
        </label>

        <CargoDropdown></CargoDropdown>

        <br />
        <div className='mt-4 mb-2 font-bold'>
          <Link href={'/registration'}>
            <a>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Get Rates
              </button>
            </a>
          </Link>
        </div>

        {/* <button
          type='button'
          onClick={handleSearchRates}
          className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700'
        >
          Search Rates
        </button> */}
      </form>

      {/* {shippingRate !== null && (
        <div className='mt-4'>
          <p className='font-bold'>Best Rate:</p>
          <p>${shippingRate.toFixed(2)}</p>
        </div>
      )} */}
    </div>
  );
}
