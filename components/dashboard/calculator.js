import { SparklesIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { FaSpaceShuttle, FaSprayCan } from 'react-icons/fa';

function CbmCalculator() {
  const [packages, setPackages] = useState([
    { length: 0, width: 0, height: 0 },
  ]);
  const [cbm, setCbm] = useState(0);

  const addPackage = () => {
    setPackages([...packages, { length: 0, width: 0, height: 0 }]);
  };

  const removePackage = (index) => {
    const newPackages = [...packages];
    newPackages.splice(index, 1);
    setPackages(newPackages);
  };

  const calculateCbm = () => {
    const totalVolume = packages.reduce(
      (acc, curr) => acc + curr.length * curr.width * curr.height,
      0
    );
    const cbm = totalVolume / 1000000; // Divide by 1 million to convert to cubic meters
    setCbm(cbm.toFixed(2)); // Round to 2 decimal places
  };

  const handlePackageChange = (index, field, value) => {
    const newPackages = [...packages];
    newPackages[index][field] = value;
    setPackages(newPackages);
  };
  const bg = {
    display: 'flex',
    padding: '10px',
    background: '#fff',
    backgroundPosition: 'right',
    justifyContent: 'space-between', // Add this line
  };
  return (
    <div className='p-4 bg-blue-100'>
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>Calculate CBM</h2>
        {packages.map((p, i) => (
          <div key={i} className='mb-4'>
            <h3 className='text-lg font-semibold mb-2'>Package {i + 1}</h3>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-1/3 px-2 mb-4 md:mb-0'>
                <label className='block font-semibold mb-1'>Length (cm)</label>
                <input
                  className='w-full rounded border-gray-300 border px-3 py-2 leading-4'
                  type='number'
                  value={p.length}
                  onChange={(e) =>
                    handlePackageChange(i, 'length', e.target.value)
                  }
                />
              </div>
              <div className='w-full md:w-1/3 px-2 mb-4 md:mb-0'>
                <label className='block font-semibold mb-1'>Width (cm)</label>
                <input
                  className='w-full rounded border-gray-300 border px-3 py-2 leading-4'
                  type='number'
                  value={p.width}
                  onChange={(e) =>
                    handlePackageChange(i, 'width', e.target.value)
                  }
                />
              </div>
              <div className='w-full md:w-1/3 px-2'>
                <label className='block font-semibold mb-1'>Height (cm)</label>
                <input
                  className='w-full rounded border-gray-300 border px-3 py-2 leading-4'
                  type='number'
                  value={p.height}
                  onChange={(e) =>
                    handlePackageChange(i, 'height', e.target.value)
                  }
                />
              </div>
            </div>
            {packages.length > 1 && (
              <button
                className='mt-2 rounded bg-red-500 text-white px-3 py-2'
                onClick={() => removePackage(i)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <div style={bg}>
          <button
            className='mt-4 rounded bg-blue-500 text-white px-3 py-2'
            onClick={addPackage}
          >
            Add Package
          </button>

          <button
            className='mt-4 rounded bg-blue-500 text-white px-3 py-2'
            onClick={calculateCbm}
          >
            Calculate
          </button>
        </div>

        <br />
        <br />
        <div className='flex justify-end items-center'>
          <div className='bg-white shadow-md rounded-md p-4 ml-auto'>
            <p className='text-gray-800 text-3xl font-bold mb-1'>
              CBM: {cbm} m³
            </p>
          </div>
          {/* <div className='bg-gray-200 h-6 w-6 rounded-full flex items-center justify-center ml-2'>
            <span className='text-gray-600 text-sm'>i</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CbmCalculator;

// In this example, the component uses an array of packages
//  to manage the length, width, and height of each package.
//   The addPackage function adds a new package to the array,
//   and the removePackage function removes a package from the
//    array. The calculateCbm function calculates the total volume
//     of all packages and then divides by 1 million to convert to
//      cubic meters. The handlePackageChange function is used to
//      update the length, width, or height of a package when the
//       user enters a new value in the corresponding input field.
//  Note that this component still assumes that the dimensions of
//   the packages are in centimeters (cm), and it divides the calculated
//    volume by 1 million to convert it to cubic meters (m³). If you need
//    to support different units of measurement, you can modify the component accordingly.
