import {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Person';

const App = () => {

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
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
            console.log("if works");
            alert(`${personObject.name} already in the list!`);
        } else {
            axios
                .post('http://localhost:3001/persons', personObject)
                .then(response => {
                    setPersons(persons.concat(response.data));
                    setNewName('');
                    setNewNumber('');
                })
        }

    }

    function handleNameChange(event) {
        console.log(event.target.value);
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value);
    }

    const handleFilterChange = (e) => {
        setNewFilter(e.target.value)
    }

    const filteredPersons = newFilter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

    return (<div>
        <h2>Phonebook</h2>
        <Filter value={newFilter} onchange={handleFilterChange}/>
        <h3>add new</h3>
        <PersonForm addPerson={addPerson} handleNameChange={handleNameChange}
                    handleNumberChange={handleNumberChange}/>
        <h3>Numbers</h3>
        <Person persons={filteredPersons}/>
    </div>)
}

export default App
