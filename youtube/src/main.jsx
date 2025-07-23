import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

createRoot(root).render(
 <BrowserRouter>
  <StrictMode>
   <App/>
  </StrictMode>
 </BrowserRouter>
);
