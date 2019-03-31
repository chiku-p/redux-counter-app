import * as React from "react";

const Counter = props => {
  const { id, value, increment, decrement } = props;

  return (
    <div className="counter-container">
      <strong>
        Counter # {id} : {value}{" "}
      </strong>

      <button className="primary" onClick={() => increment(id)}>
        Increment
      </button>

      <button className="secondary" onClick={() => decrement(id)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
