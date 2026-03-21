/* eslint-disable @typescript-eslint/no-unused-vars */
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

// Reusable Title Component
function SectionTitle({ title }) {
  return (
    <h1 style={{ textAlign: "start", color: "green" }}>
      {title}
      <br />
      ----------------------
    </h1>
  );
}

const showArticle = true;
function App() {
  // Static Data
  const tasks = [
    { id: 1, title: "Doing My Homework" },
    { id: 2, title: "Watching Movies" },
    { id: 3, title: "Playing Games" },
    { id: 4, title: "Sleeping" },
  ];

  // State
  const [devices, setDevices] = useState([
    { id: 1, name: "iPhone" },
    { id: 2, name: "Mac" },
    { id: 3, name: "Samsung" },
    { id: 4, name: "Windows" },
  ]);

  const [newDevice, setNewDevice] = useState("");

  // Handlers
  const handleAddDevice = () => {
    if (!newDevice.trim()) return;

    const newItem = {
      id: devices.length + 1,
      name: newDevice,
    };

    setDevices([...devices, newItem]);
    setNewDevice(""); // Reset the input
  };

  const handleDeleteDevice = (id: number) => {
    // const newDevices = [...devices];
    // let index = 0;
    // let selectedIndex = 0;
    // for (let device of newDevices) {
    //   if (device.id === id) {
    //     selectedIndex = index;
    //   }
    //   index++;
    // }
    // newDevices.splice(selectedIndex, 1);
    // setDevices(newDevices);
    // or

    setDevices((oldDevices) => oldDevices.filter((device) => device.id !== id));
  };

  const handleEditClick = (id: number) => {
    const newDevices = devices.map((device) => {
      if (device.id === id) {
        let newDevice = {
          ...device,
          name: "New Name",
        };
        return newDevice;
      }
      return device;
    });
    setDevices(newDevices);
  };

  let [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => {
      return c + 1;
    });

    setCount((c) => {
      return c + 1;
    });
  };

  return (
    <>
      <SectionTitle title="Components" />
      <MyFirstComponent />
      <MyButton />

      <SectionTitle title="Conditional Rendering" />
      {showArticle && <AppArticle />}

      <SectionTitle title="Rendering Lists" />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <SectionTitle title="useState Hook" />
      <Button />

      <SectionTitle title="Managing State With Input Fields" />
      <MyInput />

      <SectionTitle title="Managing State With Forms" />
      <MyForm />

      <SectionTitle title="Using Arrays as State" />
      <ul>
        {devices.map((device) => (
          <li
            key={device.id}
            style={{
              marginBottom: "10px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            {device.name}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDeleteDevice(device.id)}
            >
              Delete
            </button>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleEditClick(device.id)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newDevice}
        onChange={(e) => setNewDevice(e.target.value)}
        placeholder="Enter device name"
      />

      <button onClick={handleAddDevice}>Add</button>
      <hr />
      <SectionTitle title="Repeating Update For State" />

      <h2>Count is : {count}</h2>
      <button onClick={handleCount}>Increment</button>
    </>
  );
}

function AppArticle() {
  return (
    <>
      {/* passing props */}
      <SectionTitle title="Props" />
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
