import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  return (
    // <>
    //   <Part part={parts[0]} />
    //   <Part part={parts[1]} />
    //   <Part part={parts[2]} />
    // </>
    <div>
      {parts.map((part, i) => (
        <Part key={part.id} part={parts[i]} />
      ))}
    </div>
  );
};

export default Content;
