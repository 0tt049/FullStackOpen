const PersonForm = ({ addPerson, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} name='name' autoComplete='off' onChange={handleNameChange} />
        number: <input value={newNumber} name='number' autoComplete='off' onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
};

export default PersonForm;
