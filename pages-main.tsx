import React from "react";
import { createRoot } from "react-dom/client";
import GalaApp from "./components/gala-app";
import "./app/globals.css";
import "./app/photos.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GalaApp />
  </React.StrictMode>,
);
