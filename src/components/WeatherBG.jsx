import React, { useState, useEffect } from 'react';

const WeatherBG = ({ hasSearched, weatherData }) => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    let src = '/video1.mp4'; // default

    if (hasSearched && weatherData) {
      const desc = weatherData.weather[0].description.toLowerCase();
      console.log(desc);

      if (desc.includes('rain')) src = '/rain.mp4';
      else if (desc.includes('clouds')) src = '/clouds.mp4';
      else if (desc.includes('clear')) src = '/clear.mp4';
      else if (desc.includes('snow')) src = '/snow.mp4';
      else if (desc.includes('thunderstorm')) src = '/thunderstorm.mp4';
    }

    setVideoSrc(src);
    setIsVideoLoaded(false); 
  }, [hasSearched, weatherData]);

  return (
    <>
    
      <div
        className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-700 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url('/bg-cloud.jpg')` }}
      />

      
      {videoSrc && (
        <video
          className={`absolute inset-0 h-full w-full object-cover z-0 transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          preload="auto"
          onCanPlayThrough={() => setIsVideoLoaded(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </>
  );
};

export default WeatherBG;
