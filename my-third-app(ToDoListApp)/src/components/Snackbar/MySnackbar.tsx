import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { type AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

export default function MySnackbar({ open, message }) {
  // const handleClose = (
  //   event?: React.SyntheticEvent | Event,
  //   reason?: string,
  // ) => {
  //   if (reason === "clickaway") return;
  //   setOpen(false);
  // };

  return (
    <Snackbar open={open}>
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
}
