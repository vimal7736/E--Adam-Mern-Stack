import React from 'react';
import Form from './Form';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-gray-800 py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-white text-2xl font-bold'>My App</h1>
        </div>
      </header>
      <main className='flex-grow'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {children}
          <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
