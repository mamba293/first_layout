import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VideoPlayerPage from "./pages/VideoPlayerPage";


const root = document.getElementById("root");

createRoot(root).render(
 <StrictMode>
  <VideoPlayerPage />
 </StrictMode>
);
