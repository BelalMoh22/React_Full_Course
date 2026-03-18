import { useState, type SetStateAction } from "react";

{
  /* Managing State With input Fields */
}

function MyInput() {
  const [name, setName] = useState("");
  function handleInputChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    // alert("Hello");
    //console.log(event);
    setName(event.target.value);
  }
  return (
    <>
      <label htmlFor="">Your Name : </label>
      <input type="text" onChange={handleInputChange} />
      <p>{name}</p>
    </>
  );
}

export default MyInput;