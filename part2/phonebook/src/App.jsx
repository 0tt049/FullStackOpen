import {useState, useEffect} from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Person';
import personService from "./services/persons.js";

const App = () => {

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {name: newName, number: newNumber}
        const personsArray = persons.map(person => person.name)
        if (personsArray.includes(personObject.name)) {
            if (window.confirm("Person already in the list! Are you sure you want to change its number?")) {
                const my_id = persons.filter(person => person.name === personObject.name)[0].id
                personService
                    .update(my_id, personObject)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== my_id ? person : returnedPerson));
                        setNewName('');
                        setNewNumber('');
                    })
            }
        } else {
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson));
                    setNewName('');
                    setNewNumber('');
                })
        }

    }

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value);
    }

    const handleFilterChange = (e) => {
        setNewFilter(e.target.value);
    }

    const deletePerson = (e) => {
        const id = parseInt(e.target.value)
        if (window.confirm("Are you sure?")) {
            personService
                .destroy(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }

    const filteredPersons = newFilter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

    return (<div>
        <h2>Phonebook</h2>
        <Filter value={newFilter} onchange={handleFilterChange}/>
        <h3>add new</h3>
        <PersonForm addPerson={addPerson} handleNameChange={handleNameChange}
                    handleNumberChange={handleNumberChange}/>
        <h3>Numbers</h3>
        <Person persons={filteredPersons} deletePerson={deletePerson}/>
    </div>)
}

export default App
