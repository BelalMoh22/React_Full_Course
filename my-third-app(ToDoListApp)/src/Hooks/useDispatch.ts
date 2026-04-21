import { useContext } from "react";
import { DispatchContext } from "../contexts/DispatchContext";

export default function useDispatch() {
  return useContext(DispatchContext);
}
