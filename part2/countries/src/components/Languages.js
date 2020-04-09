import React from 'react';

const Languages = ({ languages }) => {
  return (
    <div>
      <h2>languages</h2>
      {languages.map((language) => (
        <li key={language.name}>{language.name}</li>
      ))}
    </div>
  );
};

export default Languages;
