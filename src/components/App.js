import React, { Component } from 'react';
import HelloSerina from './HelloSerina';
import ButtonGroup from './ButtonGroup';
import { store } from '../store';

class App extends Component {
  render() {
    return [
      <HelloSerina key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={['React', 'Elm', 'React-redux']} />
    ];
  }
}

export default App;
