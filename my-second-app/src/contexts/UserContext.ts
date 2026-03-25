/* eslint-disable prefer-const */
import { createContext } from "react";

const user = {
  username: "",
  password: "",
  email: "",
};
export let UserContext = createContext(user);
