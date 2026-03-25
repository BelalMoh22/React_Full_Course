import { Link } from "react-router-dom";
import { postsContext } from "../../contexts/postsContext";
import { useContext } from "react";

/* eslint-disable prefer-const */
export function Posts() {
  const posts = useContext(postsContext);
  // Dynamic Routes
  let postsList = posts.map((post) => {
    return (
      <Link
        style={{ textDecoration: "none" }}
        key={post.id}
        to={`/posts/${post.id}`}
      >
        <div
          style={{
            backgroundColor: "red",
            textAlign: "center",
            marginTop: "10px",
            color: "white",
          }}
        >
          <h2>{post.title}</h2>
        </div>
      </Link>
    );
  });
  return (
    <>
      <h1>Posts</h1>
      <hr />
      {postsList}
      <button>
        <Link to="/posts/new" style={{ textDecoration: "none" }}>
          Create Post
        </Link>
      </button>
      <button>
        <Link to="/posts/delete" style={{ textDecoration: "none" }}>
          Delete Post
        </Link>
      </button>
    </>
  );
}
