import * as React from "react";

const Counter = props => {
  const { id, value, increment, decrement } = props;

  return (
    <div data-testid={"counter-container" + id} className="counter-container">
      <strong>
        Counter # {id} : <span data-testid={"counter-value" + id}>{value}</span>{" "}
      </strong>

      <button
        data-testid={"increment" + id}
        className="primary"
        onClick={() => increment(id)}
      >
        Increment
      </button>

      <button
        data-testid={"decrement" + id}
        className="secondary"
        onClick={() => decrement(id)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
