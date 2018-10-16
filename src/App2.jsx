import React, { Component } from 'react';

export class App2 extends Component {
  componentDidUpdate(){
    console.log(1);
    
  }
  render() {
    return <div className="App2">App2</div>;
  }
}

export default App2;
