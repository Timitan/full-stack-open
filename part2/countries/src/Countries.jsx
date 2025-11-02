import Country from './Country.jsx';

const Countries = ({countries, handleShow}) => {
    return (
        <ul>
            {countries.map(country => (
                <Country key={country} name={country} handleShow={handleShow} />
            ))}
        </ul>
    )
}

export default Countries;