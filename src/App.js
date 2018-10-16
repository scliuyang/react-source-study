/**
 * @flow
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import App3 from './App3';

class App extends Component {
  state = {
    number: 1,
    text: 2,
    list: [{ key: 0, value: 0 }, { key: 1, value: 1 }],
    test: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    // return {
    //   number: props.number,
    // };
  }

  shouldComponentUpdate() {
    // TODO: 这里尝试返回false,看didUpdate粗发不
    // this.setState()
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // this.setState({
    //   number: 2,
    // });
    // console.log(this.state.number);

    // this.setState({
    //   number: 3,
    // });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  onClick = () => {
    // this.state.obj.t = 2;
    this.setState(
      {
        number: this.state.number + 1,
        // obj: this.state.obj,
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
  addItem = () => {
    const list = [this.state.list[1], this.state.list[0]];
    // let tmp = list.shift();
    // list.unshift({ key: list.length + 1, value: list.length + 1 });
    // list.unshift(tmp);
    this.setState({
      list,
    });
  };
  removeItem = () => {
    // const list = this.state.list.splice(0, 1);
    // this.setState({
    //   list,
    // });
    this.setState({
      test: !this.state.test,
    });
  };

  render() {
    console.log('render');
    // return null;
    // if (!this.state.test) {
    //   return (
    //     <div className="App" onClick={this.removeItem}>
    //       <span>1</span>
    //       <div>2</div>
    //     </div>
    //   );
    // }

    return (
      <div className="App" onClick={this.removeItem}>
        <div className="one">1111</div> 
        <div className="two">
          <div className="three">3</div>
        </div> 
        {/* <div>2</div>
        <span>2</span> */}
        {/* {this.state.list.map((item, index) => {
          // if (index === 1) {
          //   return <a key={index}>{item.value}</a>;
          // }
          return <span key={item.key}>{item.value}</span>;
        })} */}
        {/* <span test={this.state.obj}>{this.state.number}</span>
        <input value={this.state.number} /> */}
        {/* <button onClick={this.addItem}>click</button> */}
        {/* <input key="2" /> */}
        {/* <App2></App2>
        <App3></App3> */}
      </div>
    );
  }
}

export default App;
