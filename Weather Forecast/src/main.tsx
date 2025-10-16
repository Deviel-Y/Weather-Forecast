import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import AllProviders from "./AllProviders";
import router from "./components/router";
import "./i18n";

createRoot(document.getElementById("root")!).render(
 <AllProviders>
  <RouterProvider router={router} />
 </AllProviders>
);
