import { useEffect } from "react";
const CountryData = ({countryData}) => {
    if(countryData === undefined || Object.keys(countryData).length === 0) {
        return <p>Loading country data...</p>;
    }

    return (
        <div>
            <h2>{countryData.name.common}</h2>
            <p>Capital: {countryData.capital[0]}</p>
            <p>Area: {countryData.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.values(countryData.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={countryData.flags.png} alt={`Flag of ${countryData.name.common}`} width="150" />
        </div>
    )
}

export default CountryData;