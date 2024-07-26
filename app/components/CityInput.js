"use client"

import { useState } from'react';
import axios from 'axios';

const CityInput = ({ onForecastFetch }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API}&units=imperial`);
      onForecastFetch(response.data);
    } catch (error) {
      setError('Failed to fetch forecast. Please check the city name and try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <form 
        className="mt-28 bg-slate-900 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input 
            type="text" 
            value={city} 
            onChange={handleInputChange} 
            placeholder="Enter city"
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent w-full sm:w-auto"
          />
          <button 
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 w-full sm:w-auto"
          >
            Get Forecast
          </button>
        </div>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default CityInput;
