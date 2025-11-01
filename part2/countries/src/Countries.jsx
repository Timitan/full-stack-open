import Country from './Country.jsx';

const Countries = ({countries}) => {
    return (
        <ul>
            {countries.map(country => (
                <Country key={country} name={country} />
            ))}
        </ul>
    )
}

export default Countries;