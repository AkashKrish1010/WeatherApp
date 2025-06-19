import React from 'react'

const WeatherBG = ({ hasSearched, weatherData }) => {

    let videoSrc = null;

    if (hasSearched) {
        const desc = weatherData.weather[0].description.toLowerCase();
        console.log(desc);

        if (desc.includes('rain')) videoSrc = '/rain.mp4';
        else if (desc.includes('clouds')) videoSrc = '/clouds.mp4';
        else if (desc.includes('clear')) videoSrc = '/clear.mp4';
        else if (desc.includes('snow')) videoSrc = '/snow.mp4';
        else if (desc.includes('thunderstorm')) videoSrc = '/thunderstorm.mp4';
    }
    else{
        videoSrc = '/video1.mp4'; 
    }

    return (
        <>
            {videoSrc && (
                <video className="absolute inset-0 h-full w-full object-cover z-0" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
        </>
    )
}

export default WeatherBG