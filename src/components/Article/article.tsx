// props
function Article(props) {
  const children = props.children;
  return (
    <>
      <div
        style={{ backgroundColor: "violet", color: "white", margin: "10px" }}
      >
        <h2>{props.name ?? "Unknown"}</h2>
        <h3>{props.email ?? "Unknown"}</h3>
        <p>{props.age ?? "0000"}</p>
        <p>{props.content ?? "No Content"}</p>
        {children ?? "there is no Children Here"}{" "}
        {/*Here it is that i sent in the Child that is in the child Component */}
      </div>
    </>
  );
}

export default Article;
