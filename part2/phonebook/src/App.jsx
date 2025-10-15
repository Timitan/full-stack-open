import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault();

    // Check for duplicate names by looping through array to see if it finds a similar name
    if(persons.some(person => {
      return person.name === newName;
    })) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const nameObj = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    };
    setPersons(persons.concat(nameObj));
    setNewName('');
    setNewPhone('');
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    //console.log(event.target.value);
    setNewPhone(event.target.value);
  }

  const handleFilterChange= (event) => {
    //console.log(event.target.value);
    setFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>Add a new:</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} 
        newPhone={newPhone} handlePhoneChange={handlePhoneChange} />
        
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App