import React, { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const testForName = persons.map((person) => person.name).indexOf(newName);

    if (testForName !== -1) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName }));
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
}

export default App;
