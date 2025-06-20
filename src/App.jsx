import React, { useState } from 'react';
import Search from './components/Search';
import { useDebounce } from 'use-debounce';
import WeatherBG from './components/WeatherBG';



const App = () => {
  const [city, setCity] = useState('');
  const [debouncedCity] = useDebounce(city, 600);
  const [weatherData, setWeatherData] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(API_KEY)
  console.log(weatherData)

  const fetchWeather = async () => {
    if (debouncedCity.trim() === '') return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${debouncedCity}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeatherData(data);
        setHasSearched(true);
      } else {
        setWeatherData(null);
        alert("City not found.");
      }
    } catch (err) {
      console.error(err);
      setWeatherData(null);
    }
  };

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <WeatherBG
        key={weatherData?.weather[0]?.description} 
        hasSearched={hasSearched}
        weatherData={weatherData}
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        {hasSearched ? weatherData && (
          <div className='w-[350px] flex flex-col justify-center items-center text-white text-center bg-black/50 backdrop-blur-md p-4 rounded-xl shadow-lg'>
            <h2 className='text-2xl font-bold'>{weatherData.name}, {weatherData.sys.country}</h2>
            <p className='text-xl mt-2'>{weatherData.weather[0].main}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt='weather icon'
              className='mx-auto'
            />
            <p className='text-3xl mt-2'>{weatherData.main.temp}°C</p>
            <div className='flex justify-between gap-5 mt-2'>
              <div className='flex gap-2 mt-2'>
                <img className='w-3 h-3 mt-1' src='/humidity.png' />
                <p className='text-sm'>Humidity: {weatherData.main.humidity}%  </p>
              </div>
              <div className='flex gap-2 mt-2'>
                <img className='w-3 h-3 mt-1' src='/wind.png' />
                <p className='text-sm'>Wind: {weatherData.wind.speed} m/s</p>
              </div>
            </div>
            <button onClick={() => { setHasSearched(false); setWeatherData(null); setCity('') }} className='mt-5 font-semibold  w-[50%] bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition duration-200 hover:shadow-lg hover:scale-102'>New Search</button>
          </div>
        ) : <Search city={city} setCity={setCity} fetchWeather={fetchWeather} />}
      </div>
    </div>
  );

};

export default App;
