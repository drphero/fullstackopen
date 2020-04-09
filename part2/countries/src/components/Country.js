import React from 'react';
import Languages from './Languages';

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <Languages languages={country.languages} />
      <p>
        <img src={country.flag} alt='flag' width='150' />
      </p>
    </div>
  );
};

export default Country;
