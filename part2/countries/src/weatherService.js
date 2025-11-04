import axios from 'axios'
const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;

const api_key = import.meta.env.VITE_SOME_KEY
console.log(api_key);
const getWeather = (capital) => {
    if (!api_key) {
        console.error('API key is missing');
        return Promise.reject('API key is missing');
    }
    console.log(api_key);
    const url = `${baseUrl}?q=${capital}&APPID=${api_key}&units=metric`;
    const request = axios.get(url);
    return request.then(response => response.data);
}

export default { getWeather };