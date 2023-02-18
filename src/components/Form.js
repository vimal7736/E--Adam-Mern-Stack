import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col mb-4'>
        <label htmlFor='name' className='mb-2 font-bold text-lg text-gray-900'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='border border-gray-500 py-2 px-3'
          required
        />
      </div>
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
          htmlFor='message'
          className='mb-2 font-bold text-lg text-gray-900'
        >
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows='5'
          className='border border-gray-500 py-2 px-3'
          required
        ></textarea>
      </div>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
