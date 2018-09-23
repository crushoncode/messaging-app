import React, { Component } from 'react';
import HelloSerina from './HelloSerina';
import { store } from './store';

class App extends Component {
  render() {
    return <HelloSerina tech={store.getState().tech} />;
  }
}

export default App;
