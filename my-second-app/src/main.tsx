import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../src/components/MaterialUI/Colors"; // your theme file

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>,
);

/* React Router Docs : https://reactrouter.com/home */
// MUI Docs : https://mui.com/material-ui/
