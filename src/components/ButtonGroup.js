import React from 'react';
import { store } from '../store';
import { setTechnology } from '../actions';

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);

// e.target.dataset.tech will get the data attribute set on the button,
// data-tech. Hence, tech will hold the value of the text.

// store.dispatch() is how you dispatch an action in Redux.
// setTechnology() is the action creator.

function dispatchBtnAction(e) {
  const tech = e.target.dataset.tech;
  store.dispatch(setTechnology(tech));
}

export default ButtonGroup;
