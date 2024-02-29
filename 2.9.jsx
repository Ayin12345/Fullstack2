import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 0,
      phoneNumber: "040-1234567"
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      id: persons.length + 1,
      phoneNumber: newNumber
    }
    setPersons(persons.concat(person))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    const names = persons.map(person => person.name)
    if (names.includes(event.target.value)) {
        alert(`${event.target.value} is already added to the phonebook`)
    }
    else {
        setNewName(event.target.value)
    }
  }
  const handlePhoneChange = (event) => {
    const numbers = persons.map(person => person.phoneNumber)
    if (numbers.includes(event.target.value)) {
        alert(`${event.target.value} is already added to the phonebook`)
    }
    else {
        setNewNumber(event.target.value)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handlePersonChange} />
          <div>number: <input 
          value={newNumber}
          onChange = {handlePhoneChange}
          /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.id}>{person.name} {person.phoneNumber}</li>  
        )}
      </ul>
    </div>
  )
}

export default App