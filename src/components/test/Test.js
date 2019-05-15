import React, { Component } from "react";

export default class Test extends Component {
  state = {
    test: "test"
  };
  componentDidMount() {
    // here you make usually back end calls, to api or database for example with ajax
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }

  //   componentWillUpdate() {
  //     console.log("componentWillUpdate");
  //   }

  //   static getDerivedStateFromProps(nextProps, nextState) {
  //     console.log("getDerivedStateFromProps");
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate");
  //     return { test: "something" };
  //   }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
        <p>{this.state.title}</p>
        <p>{this.state.body}</p>
      </div>
    );
  }
}
