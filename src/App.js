/**
 * @flow
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    number: 1,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return {
      number: props.number,
    };
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  static getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidMount');
  }

  onClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <span>{this.state.number}</span>
        <button onClick={this.onClick}>click</button>
      </div>
    );
  }
}

export default App;
