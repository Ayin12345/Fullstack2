import { useState } from 'react'


const Filter = (props) => {
  const filter = (event) => {
    const copy = []
    if (event.target.value === '') {
      props.setPersons(props.people)
      return
    }
    props.persons.forEach(filterLetters)
    function filterLetters(item) {
      if (item.name.includes(event.target.value.toUpperCase()) || item.name.includes(event.target.value.toLowerCase())) {
        copy.push(item)
        props.setPersons(copy)
      }
    }
  }
  return (
    <div>
      filter shown with <input onChange={filter}/>
    </div>
  )


}

const PersonForm = (props) => {
  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: props.newName,
      id: props.persons.length + 1,
      number: props.newNumber
    }
    props.setPersons(props.people.concat(person))
    props.people.push(person)
    props.setNewName('')
    props.setNewNumber('')
  }

  const handlePersonChange = (event) => {
    const names = props.persons.map(person => person.name)
    if (names.includes(event.target.value)) {
        alert(`${event.target.value} is already added to the phonebook`)
    }
    else {
      props.setNewName(event.target.value)
    }
  }
  const handlePhoneChange = (event) => {
    const numbers = props.persons.map(person => person.phoneNumber)
    if (numbers.includes(event.target.value)) {
        alert(`${event.target.value} is already added to the phonebook`)
    }
    else {
      props.setNewNumber(event.target.value)
    }
  }
  return (
    <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={props.newName}
          onChange={handlePersonChange} />
          <div>number: <input 
          value={props.newNumber}
          onChange = {handlePhoneChange}
          /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const App = (props) => {
  const {people} = props
  const [persons, setPersons] = useState([...people])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setPersons={setPersons} people={people}/>

      <br></br>
      <h2>Add a New</h2>
      <PersonForm people={people} persons={persons} newName={newName} newNumber={newNumber} setPersons={setPersons}setNewName={setNewName} setNewNumber={setNewNumber}/>
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