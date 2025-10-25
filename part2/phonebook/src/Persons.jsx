import Person from './Person';

const Persons = ({persons, filter, handleDelete}) => {
    return (
        <>
        {
            persons
            .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
            .map(person => {
                return <Person key={person.id} person={person} handleDelete={handleDelete}/>
            })
        }
        </>
    );
}

export default Persons;