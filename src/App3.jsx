import React, { Component } from 'react';

export class App3 extends Component {
  state = {
    number:1
  }
  onClick=()=>{
    this.setState({
      number: this.state.number +1
    })
  }
  render() {
    return <div onClick={this.onClick} className="App3">{this.state.number}</div>;
  }
}

export default App3;
