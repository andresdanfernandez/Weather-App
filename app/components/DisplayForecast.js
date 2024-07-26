import React from "react"
import NextImage from "next/image";

export default function DisplayForecast({forecast}) {
    if(!forecast) {
        return <p className="text-2xl text-blue-400 mt-5">Enter a City Below!</p>
    }

    const formatDate = (dt) => {
        const date = new Date(dt * 1000);
        return date.toLocaleDateString('en-US', {
          day: 'numeric' 
        });
      };
    // gets the 6th element of the list everytime and up to max 7 days
      const dailyForecast = forecast.list.filter((_, index) => index % 6 === 0).slice(0, 7);

      return (
        <div className="bg-gray-900 rounded-md text-white p-4 w-full max-w-4xl mx-auto">
          <h2 className="text-2xl mb-11 font-bold text-blue-400 text-center">7-Day Forecast</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {dailyForecast.map((day, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-800 p-4 rounded-md">
                <h3 className="font-semibold mb-2 text-blue-300">{formatDate(day.dt)}</h3>
                <NextImage
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                  width={80}
                  height={80}
                />
                <p className="text-xl text-white">{Math.round(day.main.temp)}°F</p>
                <p className="text-sm text-gray-400 mt-2">{day.weather[0].main}</p>
              </div>
            ))}
          </div>
        </div>
      );

    };
