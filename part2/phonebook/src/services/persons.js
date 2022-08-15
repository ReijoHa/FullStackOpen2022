import axios from 'axios'
const url = 'http://localhost:3001/persons'

const getAll = () => axios.get(url)

const create = newNameObject => axios.post(url, newNameObject)

const setDelete = personsId => axios.delete(`${url}/${personsId}`)

const updateNumber = (personsId, newNumber) => axios.put(`${url}/${personsId}`, newNumber)

export default { getAll, create, setDelete, updateNumber }