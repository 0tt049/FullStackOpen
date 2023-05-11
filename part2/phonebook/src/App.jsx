import { useState } from 'react'

const Name = ({ persons }) => {
  return (
    persons.map(person =>
      <li key={person.name}>{person.name}</li>
    ))
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = { name: newName }
    const nameArray = persons.map(person => person.name)
    nameArray.includes(nameObject.name)
      ? (setNewName(''), alert(`${nameObject.name} already in the list!`))
      : (setPersons(persons.concat(nameObject)), setNewName(''))
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Name persons={persons} />
    </div>
  )
}

export default App
