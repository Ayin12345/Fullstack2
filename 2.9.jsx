import { useState } from 'react'

const App = (props) => {
  const {people} = props
  const [persons, setPersons] = useState([...people])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }
    setPersons(people.concat(person))
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
  const filter = (event) => {
    const copy = []
    if (event.target.value === '') {
      setPersons(people)
      return
    }
    persons.forEach(filterLetters)
    function filterLetters(item) {
      if (item.name.includes(event.target.value.toUpperCase()) || item.name.includes(event.target.value.toLowerCase())) {
        copy.push(item)
        setPersons(copy)
      }
    }


  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input 
        onChange={filter}
      />
      <br></br>
      <h2>Add a New</h2>
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
          <li key={person.id}>{person.name} {person.number}</li>  
        )}
      </ul>
    </div>
  )
}

export default App
