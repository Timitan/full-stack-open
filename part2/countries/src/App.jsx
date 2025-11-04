import { useEffect, useState } from 'react'
import countryNames from './countryNames.js'
import Countries from './Countries.jsx'
import CountryData from './CountryData.jsx'
import countryService from './countryService.js'
import weatherService from './weatherService.js'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [countryData, setCountryData] = useState({})
  const [weatherData, setWeatherData] = useState({})

  // Used for getting a list of country names from the REST Countries API
  // useEffect(() => {
  //   axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => {
  //     console.log(response.data);
  //     const names = response.data.map(country => country.name.common);
  //     console.log(names);
  //   });
  // }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value)
    const filteredCountries = countryNames.filter(country => country.toLowerCase().includes(value.toLowerCase()));
    if(filteredCountries.length == 1 && countries.length == 1 && filteredCountries[0] == countries[0]) {
      return;
    }
    setCountries(filteredCountries);
    if(filteredCountries.length === 1) {
      // countryService.getCountry(filteredCountries[0]).then(data => {
      //   console.log(data);
      //   setCountryData(data);
      // });
      getData(filteredCountries[0]);
    } else {
      setCountryData({});
      setWeatherData({});
    }
  }

  const getData = (countryName) => {
    countryService.getCountry(countryName)
    .then(data => {
      console.log(data);
      setCountryData(data);
      return data;
    })
    .then((data) => {
      console.log(data);
      return weatherService.getWeather(data.capital[0]);
    })
    .then((weatherData) => {
      console.log(weatherData);
      setWeatherData(weatherData);
    })
    .catch((error) => {
      setCountryData([]);
      setWeatherData({});
      console.error('Error fetching data:', error);
    });
  }

  const handleShow = (countryName) => {
    setFilter(countryName);
    setCountries([countryName]);
    getData(countryName);
  }

  return (
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange}/>
        {countries.length < 10 ?
          countries.length == 1 ?
          <CountryData countryData={countryData} />
          :
          countries.length > 0 ?
            <Countries countries={countries} handleShow={handleShow} />
            : <p>No matches found</p>
          : <p>Too many matches, specify another filter</p>
        }
      </div>
  )
}

export default App
