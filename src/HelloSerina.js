import React from 'react';

const HelloSerina = ({ tech }) => {
  return (
    <div className="hello-serina">
      Hello Serina <span className="hello-serina__tech">{tech}!</span>
    </div>
  );
};

export default HelloSerina;
