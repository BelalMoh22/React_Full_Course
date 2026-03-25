/* eslint-disable prefer-const */
import "./App.css";
import { About } from "./components/About/About";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Posts } from "./components/Posts/Post";
import { PostDetails } from "./components/Posts/PostDetails";
import { postsContext } from "./contexts/postsContext";
import NotFound from "./components/NotFound/NotFound";
import DeletePost from "./components/Posts/DeletePost";
import CreatePost from "./components/Posts/CreatePost";
import PostLayout from "./components/Posts/PostLayout";
import SectionTitle from "./components/SectionTitle";

let posts = [
  {
    id: 1,
    title: "First Post",
    body: "This is the first post",
  },
  {
    id: 2,
    title: "Second Post",
    body: "This is the second post",
  },
  {
    id: 3,
    title: "Third Post",
    body: "This is the third post",
  },
];

function App() {
  return (
    <>
      {/* <UserContext.Provider
        value={{
          username: "Belal",
          password: "1234",
          email: "belal@gmail.com",
        }}
      >
        <LoanForm title="Requesting a Loan" />
      </UserContext.Provider> 
      here if we send this Data Here it will be Show in all that in Routes Component so we move them to Home.tsx
      */}

      {/* Dynamic Routes */}
      <postsContext.Provider value={posts}>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/posts"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Posts
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          {/* Routing */}
          <SectionTitle title="Routing" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Nested Routes */}
            <Route path="/posts" element={<PostLayout />}>
              <Route index element={<Posts />} />
              <Route path=":id" element={<PostDetails />} />
              <Route path="new" element={<CreatePost />} />
              <Route path="delete" element={<DeletePost />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            {/* Difference Between SSR and CSR => Server Side Rendering and Client Side Rendering (Explanation) */}
          </Routes>
        </div>
      </postsContext.Provider>
    </>
  );
}

export default App;