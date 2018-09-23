import React, { Component } from 'react';
import HelloSerina from './HelloSerina';

class App extends Component {
  state = {
    tech: ' ganbate!!'
  };
  render() {
    return <HelloSerina tech={this.state.tech} />;
  }
}

export default App;
