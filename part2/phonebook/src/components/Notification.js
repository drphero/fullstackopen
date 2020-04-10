import React from 'react';

const Notification = ({ message }) => {
  const success = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };

  const error = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };

  if (message === null) {
    return null;
  }

  return (
    <div style={message.type === 'success' ? success : error}>
      {message.msg}
    </div>
  );
};

export default Notification;
