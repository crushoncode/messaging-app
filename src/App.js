import React, { Component } from 'react';
import HelloSerina from './HelloSerina';
import reducer from './reducers';
import { createStore } from 'redux';

const initialState = { tech: 'ganbate!!' };
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return <HelloSerina tech={store.getState().tech} />;
  }
}

export default App;
