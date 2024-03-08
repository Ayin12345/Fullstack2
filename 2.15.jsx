import { useState, useEffect } from 'react'
import axios from 'axios'
import persons from './services/persons'


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
const Persons = (props) => {
  const deletePerson = (id) => {
    const copy = [...props.persons]
    if (window.confirm(`Delete ${copy.find(person => person.id = id).name} ?`)) {
      copy.splice(id-1, 1)
      let array = []
      copy.map(person => {
        if(person.id > id) {
          console.log("Me!")
          array.push({...person, id: person.id - 1})
        }
        else {
          array.push({...person})
        }
      }
      )
      props.setPeople(array)
      props.setPersons(array)
      console.log(array)
    }
  }
  return (
  <ul>
    {props.persons.map(person => 
      <div>
        <li key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>Delete</button></li>  
      </div>
    )}
  </ul>
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
    let similarPerson = (props.persons.find(human => human.name = person.name))
    console.log(similarPerson)
    if (similarPerson) {
        let newPerson = {...similarPerson, number: props.newNumber}
        console.log(newPerson)
        if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
            props.people.splice(similarPerson.id - 1, 1)
            props.setPersons(props.people.concat(newPerson))
            props.people.push(person)
            props.setNewName('')
            props.setNewNumber('')
        }

    } else {
        props.setPersons(props.people.concat(person))
        props.people.push(person)
        props.setNewName('')
        props.setNewNumber('')
    }
    }

  const handlePersonChange = (event) => {
      props.setNewName(event.target.value)
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

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [people, setPeople] = useState([])
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setPeople(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setPersons={setPersons} people={people}/>

      <br></br>
      <h2>Add a New</h2>
      <PersonForm people={people} persons={persons} newName={newName} newNumber={newNumber} setPersons={setPersons}setNewName={setNewName} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} setPeople={setPeople}/>
    </div>
  )
}


export default App
