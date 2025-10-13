import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

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
      name: newName
    };
    setPersons(persons.concat(nameObj));
    setNewName('');
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => {
          return <p key={person.name}>{person.name}</p>
        })
      }
    </div>
  )
}

export default App