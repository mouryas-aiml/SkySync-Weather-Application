const API_KEY = 'd060ec5b50d045a0b5c160620250602';
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function getWeather(location: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}&aqi=yes`
    );
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}