import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";

export default function NotFound() {
  return (
    <>
      <SectionTitle title="Not Found Page" />
      <div>
        <h1>Page Not Found</h1>
        <Link to="/">Go to HomePage</Link>
      </div>
    </>
  );
}
