import React from 'react';

const PersonForm = ({ contact, handleSubmit, onChange }) => {
  const { name, number } = contact;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name:{' '}
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div>
          number:{' '}
          <input type='text' name='number' value={number} onChange={onChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
