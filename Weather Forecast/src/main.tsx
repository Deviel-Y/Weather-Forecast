import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./components/router";
import theme from "./muiTheme";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <ThemeProvider theme={theme}>
   <RouterProvider router={router} />
  </ThemeProvider>
 </StrictMode>
);
