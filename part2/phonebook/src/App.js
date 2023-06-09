import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newPhoneBook, setNewPhoneBook] = useState(
    {
      name: '',
      number: ''
    }
  )


  const [message, setMessage] = useState({ type: '', message: '' })
  let color
  if (message.type === 'success') {
    color = 'green'
  } else {
    color = 'red'
  }
  const style = {
    color: color,
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  }

  const clear = () => {
    setTimeout(() => {
      setMessage({ type: '', message: '' })
    }, 3000)
  }

  const [query, setQuery] = useState('')

  const search = (event) => {
    setQuery(event.target.value)
  }

  const showFiltered = persons.filter((person) => person.name.toLowerCase().includes(query.toLowerCase()))
  const showAll = persons.map(
    (person) =>
      <div key={person.id}>
        <h3 key={person.name}>{person.name} {person.number}</h3>
        <button key={person.id} onClick={
          () => {
            if (window.confirm(`Delete ${person.name}`)) {
              personService.del(person.id)
                .then(setPersons(persons.filter((n) => n.id !== person.id)))
                .catch((err) => {
                  setMessage({ type: 'error', message: `Information of ${person.name} has already been removed from server` })
                  clear()
                })
              setMessage({ type: 'error', message: `Deleted ${person.name}` })
              clear()
            }
          }}>Delete</button>
      </div>)


  const handleChange = (event) => {
    const { name, value } = event.target
    setNewPhoneBook(
      {
        ...newPhoneBook,
        [name]: value
      }
    )
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const existingPerson = persons.find((item) => item.name === newPhoneBook.name)
    if (existingPerson) {
      console.log(existingPerson.id)
      if (window.confirm(`${newPhoneBook.name} is already added to , replace old number with new`)) {
        personService.update(existingPerson.id, { ...existingPerson, number: newPhoneBook.number })
          .then((updatedPerson) => {
            setPersons(persons.map((person) => person.id !== updatedPerson.id ? person : updatedPerson))
            setMessage({ type: 'success', message: `Updated ${newPhoneBook.name}` })
            clear()
          })
      }
    } else {
      setPersons(persons.concat(newPhoneBook))
      setMessage({ type: 'success', message: `Added ${newPhoneBook.name}` })
      clear()
    }
    setNewPhoneBook(
      {
        name: '',
        number: ''
      }
    )
  }

  useEffect(() => {
    personService.getAll().then(response => setPersons(response))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} style={style} />
      <Filter query={query} search={search} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={handleSubmit}
        name={newPhoneBook.name}
        number={newPhoneBook.number}
        handleChange={handleChange}
      />

      <h2>Numbers</h2>
      <Persons query={query} showFiltered={showFiltered} showAll={showAll} />
    </div>
  )
}

export default App