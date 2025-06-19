import React from 'react';

const Search = ({ city, setCity, fetchWeather }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetchWeather();  
  };

  return (
    <div className='inset-0 h-[250px] w-[450px] border border-amber-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-auto backdrop-blur-lg p-4 rounded-lg shadow-lg'>
     
        <h1 className='text-3xl md:text-2xl sm:text-2xl text-white font-bold mb-8 text-center'>Weather App</h1>
        <form  className=' mt-5 w-full flex flex-col justify-between text-center gap-10' onSubmit={handleSubmit}>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type='text'
            placeholder='Enter city or country'
            className='w-full p-2 rounded-lg border border-amber-50 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-gray-950 placeholder:text-[20px] text-[20px] text-white bg-transparent'
            required
          />
          <button
            type='submit'
            className='font-semibold  w-full bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition duration-200 hover:shadow-lg hover:scale-102'
          >
            Get Weather
          </button>
        </form>
      
    </div>
  );
};

export default Search;
