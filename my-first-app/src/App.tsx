/* eslint-disable prefer-const */
/* eslint-disable react-hooks/immutability */
import Article from "./components/Article/article";
import Button from "./components/Button/Button";
import MyFirstComponent from "./components/FirstComponent/MyFirstComponent";
import MyForm from "./components/MyForm/MyForm";
import MyInput from "./components/MyInput";
import { useState } from "react";

function MyButton() {
  return <button>This is My Button</button>;
}

const showArticle = true;

function App() {
  const tasks = [
    {
      id: 1,
      title: "Doing My Homework",
    },
    {
      id: 2,
      title: "Watching Movies",
    },
    {
      id: 3,
      title: "Playing Games",
    },
    {
      id: 4,
      title: "Sleeping",
    },
  ];

  const myTasksList = tasks.map((task) => {
    return <li key={task.id}>{task.title}</li>;
  });

  const [devices, setDevices] = useState([
    "iPhone",
    "Mac",
    "Samsung",
    "Windows",
  ]);
  // const devices = ["iPhone", "Mac", "Samsung", "Windows"];
  const myDevices = devices.map((device) => {
    return <li>{device}</li>;
  });
  let [newDeviceName, setNewDeviceName] = useState("");

  return (
    <>
      <h1 style={{ textAlign: "start", color: "green" }}>
        Components
        <br />
        ----------------------
      </h1>
      <MyFirstComponent />
      <h1>Welcome to My App</h1>
      <MyButton />
      <hr />

      {/* Conditional Rendering */}
      <h1 style={{ textAlign: "start", color: "green" }}>
        Conditional Rendering <br />
        ----------------------
      </h1>
      {showArticle && <AppArticle />}
      {/* or */}
      {/* showArticle ? <MyButton /> : null */}
      <hr />
      {/* Rendering List */}
      <h1 style={{ textAlign: "start", color: "green" }}>
        Rendering Lists <br />
        ----------------------
      </h1>
      <div>
        <ul>
          {/*tasks.map((task) => (
            <li>{task}</li>
          )) */}
          {/* or */}
          {myTasksList}
        </ul>
      </div>
      <hr />
      {/* State */}
      <h1 style={{ textAlign: "start", color: "green" }}>
        UseState Hook
        <br />
        ----------------------
      </h1>
      <Button />
      <hr />
      {/* Managing State With input Fields */}
      <h1 style={{ textAlign: "start", color: "green" }}>
        Managing State With input Fields
        <br />
        ----------------------
      </h1>
      <MyInput />
      <hr />
      {/* Managing State With Forms */}
      <h1 style={{ textAlign: "start", color: "green" }}>
        Managing State With Forms
        <br />
        ----------------------
      </h1>
      <MyForm />
      <hr />
      {/* Using Arrays as State in Components */}
      <h1 style={{ textAlign: "start", color: "green" }}>
        Using Arrays as State in Components
        <br />
        ----------------------
      </h1>
      <div>
        <ul>{myDevices}</ul>
        <div>
          <br />
          <input
            type="text"
            value={newDeviceName}
            onChange={(e) => {
              setNewDeviceName(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // const newDevices = [...devices];
              // newDevices.push(newDeviceName);
              // setDevices(newDevices);
              setDevices([...devices, newDeviceName]);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

function AppArticle() {
  return (
    <>
      {/* passing props */}
      <h1 style={{ textAlign: "start", color: "green" }}>
        {" "}
        Props <br />
        ----------------------
      </h1>
      <Article
        name="Belal"
        email="belal@gmail.com"
        age="2004"
        content="loremdkdkdkdkdkkkkkkkkkkkkk"
      >
        <h1>Hello World</h1>
      </Article>
      <Article name="Yarob" email="yarob@gmail.com" age="1996" />
      <hr />
      <Article name="Yussif" email="yussif@gmail.com" age="2010" />
    </>
  );
}
export default App;
