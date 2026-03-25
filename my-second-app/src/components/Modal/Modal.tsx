export default function Modal({ isVisible, errorMsg = null }) {
  if (isVisible === false) {
    return null;
  }

  return (
    <div id="modal">
      <div id="modal-content">
        {/* <h2>The Form Has Been Submitted Successfully</h2> */}
        <h2 style={{ color: errorMsg === null ? "green" : "red" }}>
          {errorMsg === null
            ? "The Form Has Been Submitted Successfully"
            : errorMsg}
        </h2>
      </div>
    </div>
  );
}
