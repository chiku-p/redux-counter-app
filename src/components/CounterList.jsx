import React from "react";
import Counter from "./Counter";

const CounterList = props => {
  const { counters, incrementHandler, decrementHandler } = props;
  return (
    <div className="App App-header">
      {counters &&
        counters.map((c, index) => (
          <Counter
            key={index}
            id={c.id}
            value={c.value}
            increment={incrementHandler}
            decrement={decrementHandler}
          />
        ))}
    </div>
  );
};

export default CounterList;
