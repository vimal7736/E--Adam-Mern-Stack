// import { useState } from 'react';

// const CargoSearchRates = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [selectedWeightUnit, setSelectedWeightUnit] = useState('kg');
//   const [selectedVolumeUnit, setSelectedVolumeUnit] = useState('cbm');
//   const [selectedWeight, setSelectedWeight] = useState(null);
//   const [selectedVolume, setSelectedVolume] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setSelectedWeight(null);
//     setSelectedVolume(null);
//     setSelectedWeightUnit('kg');
//     setSelectedVolumeUnit('cbm');
//   };

//   const handleWeightUnitSelect = (unit) => {
//     setSelectedWeightUnit(unit);
//   };

//   const handleVolumeUnitSelect = (unit) => {
//     setSelectedVolumeUnit(unit);
//   };

//   return (
//     <div className='flex flex-col items-center justify-center h-screen'>
//       <button
//         onClick={() => setShowPopup(true)}
//         className='bg-blue-500 text-white px-4 py-2 rounded'
//       >
//         Search Rates
//       </button>
//       {showPopup && (
//         <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center'>
//           <div className='bg-white p-8 rounded shadow-lg'>
//             <h2 className='text-2xl font-bold mb-4'>Select Container Type</h2>
//             <button
//               onClick={() => handleOptionSelect('FLF')}
//               className={`${
//                 selectedOption === 'FLF'
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-300 text-gray-700'
//               } px-4 py-2 rounded mr-4`}
//             >
//               Full Container (FLF)
//             </button>
//             <button
//               onClick={() => handleOptionSelect('LCL')}
//               className={`${
//                 selectedOption === 'LCL'
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-300 text-gray-700'
//               } px-4 py-2 rounded`}
//             >
//               Less than Container Load (LCL)
//             </button>
//             {selectedOption === 'LCL' && (
//               <div className='mt-4'>
//                 <label htmlFor='weight' className='block font-bold mb-2'>
//                   Total Weight
//                 </label>
//                 <div className='flex'>
//                   <input
//                     id='weight'
//                     type='number'
//                     value={selectedWeight}
//                     onChange={(e) => setSelectedWeight(e.target.value)}
//                     className='block appearance-none w-32 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-2'
//                   />
//                   <select
//                     value={selectedWeightUnit}
//                     onChange={(e) => handleWeightUnitSelect(e.target.value)}
//                     className='block appearance-none w-32 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                   >
//                     <option value='kg'>kg</option>
//                     <option value='lb'>lb</option>
//                   </select>
//                 </div>
//                 <label htmlFor='volume' className='block font-bold mb-2'>
//                   Total Volume
//                 </label>
//                 <input
//                   type='number'
//                   id='volume'
//                   value={totalVolume}
//                   onChange={handleTotalVolumeChange}
//                   className='block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                 />
//                 <select
//                   value={selectedVolumeUnit}
//                   onChange={(e) => handleVolumeUnitSelect(e.target.value)}
//                   className='block mt-2 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                 >
//                   <option value='cbm'>cbm</option>
//                   <option value='cft'>cft</option>
//                   <option value='cin'>cin</option>
//                 </select>
//               </div>
//             )}
//             <div className='flex justify-end mt-4'>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className='bg-gray-500 text-white px-4 py-2 rounded mr-2'
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => console.log('Search Rates')}
//                 className='bg-blue-500 text-white px-4 py-2 rounded'
//               >
//                 Search Rates
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CargoSearchRates;

// function Registerform() {
//   const bg = {
//     display: 'flex',
//     // backgroundPosition: 'right',
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//   };
//   return (
//     <div className='grid md:grid-cols-2'>
//       <div className='image'>
//         <Link href={'/'}>
//           <a>
//             <Image src={'/images/footer.png'} width={400} height={400} />
//           </a>
//         </Link>
//       </div>
//       <div className='info flex justify-center flex-col'>
//         <div className='cat'>
//           <Link href={'/'}>
//             <a className='text-orange-600 hover:text-orange-800'>
//               Business, Travel
//             </a>
//           </Link>
//           <Link href={'/'}>
//             <a className='text-gray-800 hover:text-gray-600'>- July 3, 2022</a>
//           </Link>
//         </div>
//         <div className='title'>
//           <form style={bg} onSubmit={handleSubmit}>
//             <div className='flex flex-col mb-4'>
//               <CountryDropdown></CountryDropdown>
//             </div>
//             <div>
//               <div style={bg}>
//                 <div>
//                   <CountryDropdown></CountryDropdown>
//                 </div>
//                 <div>
//                   <ZipcodeDropdown></ZipcodeDropdown>
//                 </div>
//               </div>
//               <div className='flex flex-col mb-4'></div>
//             </div>

//             <Link href={'/registration'}>
//               <a>
//                 <button
//                   type='submit'
//                   className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
//                 >
//                   Register Your Service
//                 </button>
//               </a>
//             </Link>
//           </form>
//           {/* <Link href={'/'}>
//             <a className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>
//               Your most unhappy customers are your greatest source of learning
//             </a>
//           </Link> */}
//         </div>
//         {/* <p className='text-gray-500 py-3'>
//           Even the all-powerful Pointing has no control about the blind texts it
//           is an almost unorthographic life One day however a small line of blind
//           text by the name of Lorem Ipsum decided to leave for the far World of
//           Grammar.
//         </p> */}
//         {/* <Author></Author> */}
//       </div>
//     </div>
//   );
// }
