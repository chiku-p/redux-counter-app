import { connect } from "react-redux";
import React, { Component } from "react";
import CounterList from "../components/CounterList";
import { incrementCounter, decrementCounter } from "../actions/counterActions";

class App extends Component {
  render() {
    const { counters, incrementCounter, decrementCounter } = this.props;
    return (
      <CounterList
        counters={counters}
        incrementHandler={incrementCounter}
        decrementHandler={decrementCounter}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { counters: state.counters };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: (id) => dispatch(incrementCounter(id)),
    decrementCounter: (id) => dispatch(decrementCounter(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
