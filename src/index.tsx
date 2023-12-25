import React, { useCallback } from "react";
import ReactDOM from "react-dom/client";
import Particle from "./particles/particles.tsx";
import "./css/scrollbar.css";
import { App } from "./app.tsx";
import "./css/input.css";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<App />);
