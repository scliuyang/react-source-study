/**
 * @flow
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    number: 1,
    text: 2,
    obj: {
      t: 1,
    },
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    // return {
    //   number: props.number,
    // };
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      number: 2,
    });
    // console.log(this.state.number);

    // this.setState({
    //   number: 3,
    // });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    
  }

  onClick = () => {
    this.state.obj.t = 2;
    this.setState(
      {
        number: this.state.number + 1,
        obj: this.state.obj,
      },
      () => {
        console.log(JSON.stringify(this.state));
      },
    );
    this.setState(
      {
        text: this.state.text + 2,
      },
      (state) => {
        console.log(JSON.stringify(this.state));
      },
    );
  };

  render() {
    console.log('render');
    
    return (
      <div className="App">
        <span test={this.state.obj}>{this.state.number}</span>
        <input value={this.state.number} />
        <button onClick={this.onClick}>click</button>
      </div>
    );
  }
}

export default App;
