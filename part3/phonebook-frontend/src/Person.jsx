const Person = ({ person, handleDelete }) => {
    return (
        <div>
            <p style={{display: 'inline-block', margin: '0 5px 0 0'}} key={person.id}>{person.name} {person.number}</p>
            <button onClick={() => window.confirm(`Delete ${person.name}?`) && handleDelete(person.id)}>delete</button>
        </div>
    );
}

export default Person;