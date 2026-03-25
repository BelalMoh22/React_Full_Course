import "./App.css";
import LoanForm from "./components/Loan/LoanForm";
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserContext.Provider
        value={{
          username: "Belal",
          password: "1234",
          email: "belal@gmail.com",
        }}
      >
        <LoanForm title="Requesting a Loan" />
        {/* here we send from parent component to child component */}
      </UserContext.Provider>
    </>
  );
}

export default App;
