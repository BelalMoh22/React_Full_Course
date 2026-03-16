import Article from "./components/Article/article";
import MyFirstComponent from "./components/FirstComponent/MyFirstComponent";

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
  return (
    <>
      <MyFirstComponent />
      <h1>Welcome to My App</h1>
      <MyButton />
      <hr />

      {/* Conditional Rendering */}
      {showArticle && <AppArticle />}
      {/* or */}
      {/* showArticle ? <MyButton /> : null */}
      <hr />
      {/* Rendering List */}
      <div>
        <ul>
          {/*tasks.map((task) => (
            <li>{task}</li>
          )) */}
          {/* or */}
          {myTasksList}
        </ul>
      </div>
    </>
  );
}

function AppArticle() {
  return (
    <>
      {/* passing props */}
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
