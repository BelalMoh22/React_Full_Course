import { createContext } from "react";

type ToastContextType = {
  showHideToast: (message: string) => void;
};

export const ToastContext = createContext<ToastContextType>({
  showHideToast: () => {},
});
