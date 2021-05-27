import { useEffect, useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);
  function handdleAddCounter() {
    props.setCounter(props.counter + 1);
    console.log("Add counter");
  }
  function handleSabtracCounter() {
    props.setCounter(props.counter - 1);
    console.log("Subtract counter");
  }
  function handleResetCounter() {
    props.setCounter(0);
    console.log("Reset counter");
  }

  useEffect(() => {
    console.log("test effect");
  });

  useEffect(() => {
    console.log("Effect is running");
    return () => {
      console.log("clean up");
    };
  }, [props.counter]);

  return (
    <div>
      <h1>Counter : {props.counter}</h1>
      <button onClick={handdleAddCounter}> Add</button>
      <button onClick={handleSabtracCounter}>Subtract</button>
      <button onClick={handleResetCounter}>Reset</button>
    </div>
  );
}

export default Counter;
