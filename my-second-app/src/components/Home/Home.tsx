import { UserContext } from "../../contexts/UserContext";
import LoanForm from "../Loan/LoanForm";
import SectionTitle from "../SectionTitle";

export function Home() {
  return (
    // Using (useContext) to share data from App to Children
    <>
      <SectionTitle title="Using (useContext) to share data from App to Children " />
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
