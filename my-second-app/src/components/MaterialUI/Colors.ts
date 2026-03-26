/* eslint-disable @typescript-eslint/no-unused-vars */
import { createTheme } from "@mui/material/styles";
import { purple , orange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#0276aa",
    },
  },
});
