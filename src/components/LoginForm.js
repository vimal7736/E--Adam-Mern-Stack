import React from 'react';

const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col mb-4'>
        <label htmlFor='email' className='mb-2 font-bold text-lg text-gray-900'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='border border-gray-500 py-2 px-3'
          required
        />
      </div>
      <div className='flex flex-col mb-4'>
        <label
          htmlFor='password'
          className='mb-2 font-bold text-lg text-gray-900'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          className='border border-gray-500 py-2 px-3'
          required
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
