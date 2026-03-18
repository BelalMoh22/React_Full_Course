import { useState } from "react";

const name = "Belal";

function Button() {
  {
    /* useState */
  }
  // const state = useState(name); // Array of [initialState, setState] => value and function
  // console.log(state);
  // const value = state[0];
  // console.log(value);
  // const setValue = state[1];
  // console.log(setValue);

  const [value, setValue] = useState(name);
  function changeName() {
    if (value === name) {
      setValue("Yussif");
    } else {
      setValue(name);
    }
  }

  return (
    <div>
      {/* <button onClick={() => (name = "Yarob")}>Click Me</button> */}
      <button onClick={changeName}>Click Me</button>
      <p>{value}</p>
    </div>
  );
}

export default Button;
