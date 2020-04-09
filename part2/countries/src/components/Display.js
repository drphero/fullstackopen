import React from 'react';
import Country from './Country';

const Display = ({ filter, setFilter, countries }) => {
  const filterCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  const lessThanTen = () => (
    <div>
      {filterCountries.map((country) => (
        <div key={country.numericCode}>
          {country.name}
          <button onClick={() => setFilter(country.name)}>show</button>
        </div>
      ))}
    </div>
  );

  const result = () => (
    <div>
      <Country country={filterCountries[0]} />
    </div>
  );

  return filter === '' ? null : filterCountries.length > 10 ? (
    <div>Too many matches, specify another filter</div>
  ) : filterCountries.length > 1 ? (
    lessThanTen()
  ) : filterCountries.length === 1 ? (
    result()
  ) : (
    <div>No results...</div>
  );
};

export default Display;
