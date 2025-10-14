import { useState } from 'react'

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
      number: newPhone
    };
    setPersons(persons.concat(nameObj));
    setNewName('');
    setNewPhone('');
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  }

  const handleFilterChange= (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange}/>
      </div>
      <h2>Add a new:</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
                <div>
          phone: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons
        .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
          .map(person => {
            return <p key={person.id}>{person.name} {person.number}</p>
          })
      }
    </div>
  )
}

export default App