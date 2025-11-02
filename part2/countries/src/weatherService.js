import axios from 'axios'
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

const api_key = import.meta.env.VITE_WEATHER_API_KEY;

const getWeather = (capital) => {
    const url = `${baseUrl}?q=${capital}&APPID=${api_key}&units=metric`;
    const request = axios.get(url);
    return request.then(response => response.data);
}

export default { getWeather };