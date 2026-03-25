// Reusable Title Component
export default function SectionTitle({ title }) {
  return (
    <h1 style={{ textAlign: "start", color: "green" }}>
      {title}
      <br />
      ----------------------
    </h1>
  );
}
