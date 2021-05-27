import React from "react";

class ExtraCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    // this.handleAddCounter = this.handleAddCounter.bind(this);
    // this.handleSubtrackCounter = this.handleSubtrackCounter.bind(this);
    // this.handleResetCounter = this.handleResetCounter.bind(this);
  }

  componentDidMount() {
    console.log("Mounting");
  }

  componentDidUpdate() {
    console.log("updated");
  }

  componentDidMount() {
    console.log("About to die");
  }

  handleAddCounter = () => {
    console.log(this);
    this.setState(function (state) {
      return { counter: state.counter + 1 };
    });
  };
  handleSubtrackCounter = () => {
    this.setState(function (state) {
      return { counter: state.counter - 1 };
    });
  };
  handleResetCounter = () => {
    this.setState(function () {
      return { counter: 0 };
    });
  };
  render() {
    return (
      <div>
        <h1>Counter : {this.state.counter}</h1>
        <button onClick={this.handleAddCounter}> Add</button>
        <button onClick={this.handleSubtrackCounter}>Subtract</button>
        <button onClick={this.handleResetCounter}>Reset</button>
      </div>
    );
  }
}

export default ExtraCounter;
