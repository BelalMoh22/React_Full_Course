import { Outlet } from "react-router-dom";
import SectionTitle from "../SectionTitle";

export default function PostLayout() {
  return (
    <>
      <SectionTitle title="Nested Routes" />
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Post Layout</h1>
      </div>

      <div>
        <Outlet />
      </div>

      <div
        style={{
          backgroundColor: "green",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Post Footer</h1>
      </div>
    </>
  );
}
