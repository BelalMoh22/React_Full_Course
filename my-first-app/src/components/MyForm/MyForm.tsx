/* eslint-disable prefer-const */
/* eslint-disable react-hooks/immutability */
import { useState } from "react";

{
  /* Managing State With Forms */
}
function MyForm() {
  // const [nameInput, setNameInput] = useState("");
  // const [emailInput, setEmailInput] = useState("");
  // or
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    is18: false,
    city: "",
    status: "",
  });

  function handleCheckboxToggler(e) {
    if (e.target.value === "on") {
      setFormInputs({ ...formInputs, is18: true });
    } else {
      setFormInputs({ ...formInputs, is18: false });
    }
  }

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formInputs);
          // const bodyParam = {
          //   "name": nameInput,
          //   "email": emailInput,
          // }
          // and send it to the server (Api)
        }}
      >
        <label htmlFor="">Name : </label>
        <input
          type="text"
          value={formInputs.name}
          onChange={(e) =>
            setFormInputs({
              name: e.target.value,
              email: formInputs.email,
              age: formInputs.age,
              generalInfo: formInputs.generalInfo,
              is18: formInputs.is18,
              city: formInputs.city,
              status: formInputs.status,
            })
          }
        />
        <br /> <br />
        <label htmlFor="">Email : </label>
        <input
          type="email"
          value={formInputs.email}
          onChange={(e) =>
            setFormInputs({
              name: formInputs.name,
              email: e.target.value,
              age: formInputs.age,
              generalInfo: formInputs.generalInfo,
              is18: formInputs.is18,
              city: formInputs.city,
              status: formInputs.status,
            })
          }
        />
        <br /> <br />
        <label htmlFor="">Age : </label>
        <input
          type="text"
          value={formInputs.age}
          onChange={(e) => {
            // let newFormInputs = { ...formInputs };
            // newFormInputs.age = e.target.value;
            // setFormInputs(newFormInputs); // Revise this using ChatGpt
            // or
            setFormInputs({ ...formInputs, age: e.target.value }); // => Best Practice
          }}
        />
        <br /> <br /> <br />
        {/* Other Form Fields with state */}
        <label htmlFor="">General Info</label>
        <textarea
          name=""
          id=""
          onChange={(e) => {
            setFormInputs({ ...formInputs, generalInfo: e.target.value });
          }}
        >
          {formInputs.generalInfo}
        </textarea>
        <br /> <br />
        <label htmlFor="">Are you 18? </label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={formInputs.is18}
          onChange={handleCheckboxToggler}
        />
        <br /> <br />
        {/* Select & Radio Inputs */}
        <select
          name=""
          id=""
          value={formInputs.city}
          onChange={(e) => {
            setFormInputs({ ...formInputs, city: e.target.value });
          }}
        >
          <option hidden>Cities</option>
          <option>Cairo</option>
          <option>Alex</option>
          <option>Giza</option>
        </select>
        <br /> <br />
        <div>
          <input
            value="student"
            type="radio"
            name="status"
            id=""
            checked={formInputs.status == "student"}
            onChange={(e) => {
              setFormInputs({ ...formInputs, status: e.target.value });
            }}
          />
          Student
          <input
            value="teacher"
            type="radio"
            name="status"
            id=""
            checked={formInputs.status == "teacher"}
            onChange={(e) => {
              setFormInputs({ ...formInputs, status: e.target.value });
            }}
          />
          Teacher
        </div>
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default MyForm;
