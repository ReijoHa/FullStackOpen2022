import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import service from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [msg, setMsg] = useState('')
  const [errors, setErrors] = useState('')

  useEffect(() => {
    service
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const handleNewNotes = (event) => setNewName(event.target.value)
  const [newNumber, setNewNumber] = useState('')
  const handleNewNumbers = (event) => setNewNumber(event.target.value)
  const [newFilter, setNewFilter] = useState('')
  const handleNewFilters = (event) => setNewFilter(event.target.value)

  const addNewName = (event) => {
    event.preventDefault()
    const newNameObject = {name: newName, phonenumber: newNumber}
    if (persons.find(person => person.name.includes(newName))){
      const findPerson = persons.find(person => person.name === newName)
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        service
          .updateNumber(findPerson.id, newNameObject)
          .then((response) => {
            const findPersonsIndex = persons.findIndex(person => person.name === newName)
            const newCopy = [...persons]
            newCopy[findPersonsIndex]=response.data
            setPersons(newCopy)
            setMsg(`Phone number updated`)
            setTimeout(() => {
            setMsg(null)
            }, 4000)})
          .catch(error => {
            setMsg(`Information of ${newName} has already been removed from server.`)
            setErrors("error")
            setTimeout(() => {
            setMsg(null)
            setErrors(null)
            }, 4000)
            })
    }
    }
    else {
      service
        .create(newNameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setMsg(`Added ${newName}`)
          setTimeout(() => {
          setMsg(null)
          }, 4000)
    })}
    setNewName('')
    setNewNumber('')
  }

  const search = persons.filter(letters => letters.name.toLowerCase().includes(newFilter.toLowerCase()))

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      service
        .setDelete(person.id)
        .then(() => {
          setPersons(persons.filter(i => i.id !== person.id))
          setMsg(`Deleted ${person.name}`)
          setTimeout(() => {
          setMsg(null)
          }, 4000)
    })}
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification msg={msg} status={errors}/>
      <Filter newFilter={newFilter} handleNewFilters={handleNewFilters}/>
      <h2>add a new</h2>
      <PersonForm addNewName={addNewName} newName={newName} handleNewNotes={handleNewNotes} newNumber={newNumber} handleNewNumbers={handleNewNumbers}/>
      <h2>Numbers</h2>
      <Persons search={search} deletePerson={deletePerson}/>
    </div>
  )
}

export default App