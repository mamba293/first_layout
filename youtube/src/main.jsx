import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

createRoot(root).render(
 <StrictMode>
  <BrowserRouter>
   <VideoPlayerPage />
  </BrowserRouter>
 </StrictMode>
);
