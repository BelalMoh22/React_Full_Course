// Dynamic Routes
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../../contexts/postsContext";
import NotFound from "../NotFound/NotFound";
import SectionTitle from "../SectionTitle";
export function PostDetails() {
  <SectionTitle title="Dynamic Routes" />;
  const posts = useContext(postsContext);

  const params = useParams();
  console.log(params);
  console.log(params.id);
  const post = posts.find((p) => p.id == params.id);
  if (post) {
    return (
      <>
        <h1>Post Details</h1>
        <hr />
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </>
    );
  } else {
    return <NotFound />;
    //or
    // return <h1>The Post with id: {params.id} is not found</h1>;
  }
}
