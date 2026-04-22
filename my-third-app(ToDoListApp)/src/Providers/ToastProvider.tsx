// /* eslint-disable react-refresh/only-export-components */
// import { useState, type ReactNode, type SyntheticEvent } from "react";
// import MySnackbar from "../components/Snackbar/MySnackbar";
// import { ToastContext } from "../contexts/ToastContext";

// type ToastProviderProps = {
//   children: ReactNode;
// };

// export const ToastProvider = ({ children }: ToastProviderProps) => {
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   const showHideToast = (toastMessage: string) => {
//     setMessage(toastMessage);
//     setOpen(true);
//   };

//   const handleToastClose = (
//     _event?: SyntheticEvent | Event,
//     reason?: string,
//   ) => {
//     if (reason === "clickaway") return;
//     setOpen(false);
//   };

//   return (
//     <ToastContext.Provider value={{ showHideToast }}>
//       {children}
//       <MySnackbar
//         open={open}
//         message={message}
//         handleClose={handleToastClose}
//       />
//     </ToastContext.Provider>
//   );
// };
