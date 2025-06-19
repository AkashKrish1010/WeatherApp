import React from 'react';

const Search = ({ city, setCity, fetchWeather }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className='absolute inset-0 flex items-center justify-center z-10'>
      <div className='w-[90%] max-w-md bg-auto border border-amber-50 backdrop-blur-lg p-6 rounded-lg shadow-lg'>
        <h1 className='text-3xl text-white font-bold mb-6 text-center'>Weather App</h1>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type='text'
            placeholder='Enter city or country'
            aria-label='City or country input'
            autoComplete='off'
            required
            className='w-full p-3 rounded-lg border border-amber-50 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-gray-800 text-white bg-transparent text-lg'
          />
          <button
            type='submit'
            className='w-full bg-blue-400 text-white p-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-200 hover:shadow-lg hover:scale-102'
            aria-label='Get weather button'
          >
            Get Weather
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
