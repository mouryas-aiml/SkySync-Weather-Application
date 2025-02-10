import React from 'react';
import { WeatherData } from '../types/weather';
import { Wind, Droplets, Thermometer } from 'lucide-react';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  const getAirQualityText = (index: number) => {
    const qualities = ['Good', 'Moderate', 'Unhealthy for sensitive groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous'];
    return qualities[index - 1] || 'Unknown';
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 text-white">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold mb-2">{weather.location.name}</h2>
          <p className="text-xl text-white/80">{weather.location.country}</p>
          <p className="text-sm text-white/60">{weather.location.localtime}</p>
        </div>
        <img 
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
          className="w-24 h-24"
        />
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          <span className="text-6xl font-bold">{weather.current.temp_c}°C</span>
          <span className="text-xl">{weather.current.condition.text}</span>
        </div>
        <p className="text-white/80 mt-2">Feels like {weather.current.feelslike_c}°C</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
          <Wind className="text-blue-300" size={24} />
          <div>
            <p className="text-sm text-white/60">Wind Speed</p>
            <p className="text-xl font-semibold">{weather.current.wind_kph} km/h</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
          <Droplets className="text-blue-300" size={24} />
          <div>
            <p className="text-sm text-white/60">Humidity</p>
            <p className="text-xl font-semibold">{weather.current.humidity}%</p>
          </div>
        </div>
      </div>

      <div className="bg-white/5 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <Thermometer className="text-blue-300" size={24} />
          <div>
            <p className="text-sm text-white/60">Air Quality</p>
            <p className="text-xl font-semibold">
              {getAirQualityText(weather.current.air_quality['us-epa-index'])}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}