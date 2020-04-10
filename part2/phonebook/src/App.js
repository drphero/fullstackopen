import React, { useState, useEffect } from 'react';
import axios from 'axios';
import personService from './services/persons';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';

function App() {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const testForName = persons
      .map((person) => person.name)
      .indexOf(contact.name);

    if (testForName !== -1) {
      alert(`${contact.name} is already added to phonebook`);
    } else {
      personService.create(contact).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setContact({
          name: '',
          number: '',
        });
      });
    }
  };

  const display = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>add a new</h2>
      <PersonForm
        contact={contact}
        handleSubmit={handleSubmit}
        onChange={onChange}
      />
      <h2>Numbers</h2>
      <Persons persons={display} />
    </div>
  );
}

export default App;
