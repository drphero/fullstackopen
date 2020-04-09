import React from 'react';
import Country from './Country';

const Display = ({ filter, countries }) => {
  if (filter !== '') {
    const filterCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filterCountries.length < 10 && filterCountries.length > 1) {
      return (
        <div>
          {filterCountries.map((country) => (
            <div key={country.numericCode}>{country.name}</div>
          ))}
        </div>
      );
    } else if (filterCountries.length === 1) {
      return (
        <div>
          <Country country={filterCountries[0]} />
        </div>
      );
    } else if (filterCountries.length === 0) {
      return <div>No results...</div>;
    } else {
      return <div>Too many matches, specify another filter</div>;
    }
  }
  return <div></div>;
};

export default Display;
