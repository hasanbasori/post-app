import { useState } from "react";
import ExtraCounter from "../component/ExtraCounter";
import Counter from "../component/Counter";

function Counter1() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <h1>SHoW cOunter{counter}</h1>
      {toggle && <Counter counter={counter} setCounter={setCounter} />}
      <button onClick={() => setToggle(!toggle)}> TOGGLE</button>
    </div>
  );
}

export default Counter1;
