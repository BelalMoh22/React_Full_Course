import "./FirstComponent.css";
const x = 1;

const person = {
  id: 1,
  name: "Belal",
  email : "belal@gmail.com"
}

const personStyle = {
  backgroundColor : "red",
  fontSize : "20px"
}

function MyFirstComponent() {
  return (
    <div className={"firstComp"}>
      <h1 style={{backgroundColor :"red" }}>{x} This is My First Component</h1>
      <p>{sayHello()} paragraph</p>
      <p style={personStyle}>{person.name} , {person.email} </p>
      <button onClick={alertHello}>This is My First Component</button>
    </div>
  );
}

function sayHello() {
  return "Hello from js Function>>>>"
}

function alertHello() {
  alert("Hello");
}

export default MyFirstComponent;
