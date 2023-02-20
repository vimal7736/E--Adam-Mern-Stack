import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Format from '../layout/format';
// import Author from '../components/_child/author';
import Ralated from '../components/_child/ralated';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Format>
      <section
        className='container mx-auto md:px-2 py-16 w-1/2 bg-cover bg-right'
        style={{ backgroundImage: "url('/images/iim.jpg')" }}
      >
        {/* <Author /> */}

        <div className='post py-10'>
          <h1 className='font-bold text-4xl text-center pb-5 text-white'>
            Cargo Registration
          </h1>

          <p className='text-gray-500 text-xl text-center pb-10'>
            Book your freight
          </p>

          <div className='py-10'>
            <div className='py-10'>
              <h1 className='font-bold text-2xl pb-5'>Register</h1>
              <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6'>
                <div className='col-span-2 sm:col-span-1'>
                  <label
                    htmlFor='username'
                    className='block font-medium text-gray-700'
                  >
                    Username:
                  </label>
                  <input
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <label
                    htmlFor='email'
                    className='block font-medium text-gray-700'
                  >
                    Email:
                  </label>
                  <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <label
                    htmlFor='password'
                    className='block font-medium text-gray-700'
                  >
                    Password:
                  </label>
                  <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <label
                    htmlFor='confirmPassword'
                    className='block font-medium text-gray-700'
                  >
                    Confirm Password:
                  </label>
                  <input
                    type='password'
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    required
                  />
                </div>

                <Link href={'/dashboard'}>
                  <a>
                    <button
                      type='submit'
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                      Register
                    </button>
                  </a>
                </Link>
                <Link href={'/'}>
                  <a>
                    <button
                      type='submit'
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                      Login
                    </button>
                  </a>
                </Link>
              </form>
            </div>
            {/* <Image src={'/images/banner.jpg'} width={600} height={600}></Image> */}
          </div>

          {/* <div className='content text-gray-600 text-lg flex flex-col gap-4'>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
          </div> */}
        </div>

        {/* <Ralated></Ralated> */}
      </section>
    </Format>
  );
}
