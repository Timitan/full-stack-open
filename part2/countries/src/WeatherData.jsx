const WeatherData = ({weatherData}) => {
    if(weatherData === undefined || Object.keys(weatherData).length === 0) {
        return <p>Loading weather data...</p>;
    }

    return (
        <div>
            <h2>Weather in {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} Celsius</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
            <p>Wind: {weatherData.wind.speed} m/s, {weatherData.wind.deg}°</p>
        </div>
    );
}

export default WeatherData;