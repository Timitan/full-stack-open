import { useEffect, useState } from 'react'
import axios from 'axios'
import countryNames from './countryNames.js'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  // useEffect(() => {
  //   axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => {
  //     console.log(response.data);
  //     const names = response.data.map(country => country.name.common);
  //     console.log(names);
  //     //setCountries(response.data);
  //   });
  // }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value)
    const filteredCountries = countryNames.filter(country => country.toLowerCase().includes(value.toLowerCase()));
    setCountries(filteredCountries);
  }

  return (
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange}/>
        {countries.length < 10 ?
          <ul>
            {countries.map(country => (
              <li key={country}>{country}</li>
            ))}
          </ul>
          : <p>Too many matches, specify another filter</p>
        }
      </div>
  )
}

export default App
