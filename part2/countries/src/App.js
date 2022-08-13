import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const [newFilter, setNewFilter] = useState('')
  const handleNewFilters = (event) => setNewFilter(event.target.value)

  const pressButton = (country) => setNewFilter(country)

  const search = countries.filter(letters => letters.name.common.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <Filter newFilter={newFilter} handleNewFilters={handleNewFilters}/>
      <Countries search={search} button={pressButton}/>
    </div>
  )
}

export default App