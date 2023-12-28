import React, { useCallback } from "react";
import ReactDOM from "react-dom/client";
import Particle from "./particles/particles.tsx";
import "./css/scrollbar.css";
import { App } from "./app.tsx";
import "./css/input.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { urlHost } from "./variables/const.ts";
import { HomeScreen } from "./components/screens/home.tsx";
import { AboutScreen } from "./components/screens/about.tsx";
import { ProjectScreen } from "./components/screens/projects.tsx";
import { ContactScreen } from "./components/screens/contact.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={`${urlHost}`} element={<App />}>
        <Route index element={<HomeScreen />} />
        <Route path={`${urlHost}/Home`} element={<HomeScreen />} />
        <Route path={`${urlHost}/About`} element={<AboutScreen />} />
        <Route path={`${urlHost}/Projects`} element={<ProjectScreen />} />
        <Route path={`${urlHost}/Contact`} element={<ContactScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
