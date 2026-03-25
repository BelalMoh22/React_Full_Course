import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <h1>About Us</h1>
      <div
        style={{
          backgroundColor: "orange",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <Link to="/">Go to HomePage</Link>
      </div>
    </>
  );
}
