import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Display from './components/Display';

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Display filter={filter} countries={countries} />
    </div>
  );
}

export default App;
