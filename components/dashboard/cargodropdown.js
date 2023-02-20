import { useState } from 'react';

const weightOptions = [
  { label: 'Select weight', value: '' },
  { label: '100 lbs', value: '100' },
  { label: '110 lbs', value: '110' },
  { label: '120 lbs', value: '120' },
  { label: '130 lbs', value: '130' },
  { label: '140 lbs', value: '140' },
  { label: '150 lbs', value: '150' },
  { label: '160 lbs', value: '160' },
  { label: '170 lbs', value: '170' },
  { label: '180 lbs', value: '180' },
  { label: '190 lbs', value: '190' },
  { label: '200 lbs', value: '200' },
];

export default function CargoDropdown() {
  const [weight, setWeight] = useState('');

  return (
    <div>
      {/* <label htmlFor='weight' className='mt-4 mb-2 font-bold'>
        Weight:
      </label>
      <br /> */}
      <select
        id='weight'
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className='p-2 border border-gray-400 rounded-md'
      >
        {weightOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
