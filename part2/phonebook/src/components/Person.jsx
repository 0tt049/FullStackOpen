const Person = ({persons, deletePerson}) => {
    return (
        persons.map(person =>
            <li key={person.name}>{person.name} - {person.number}
                <button type="submit" value={person.id} onClick={deletePerson}>Delete</button>
            </li>
        ))
};

export default Person
