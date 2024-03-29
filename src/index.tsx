import ReactDOM from "react-dom/client";
import "./css/scrollbar.css";
import { App } from "./app.tsx";
import "./css/input.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { urlHost } from "./variables/const.tsx";
import { HomeScreen } from "./components/screens/home.tsx";
import { AboutScreen } from "./components/screens/about.tsx";
import { ProjectScreen } from "./components/screens/projects.tsx";
import { ContactScreen } from "./components/screens/contact.tsx";
import { ResumeScreen } from "./components/screens/resume.tsx";
import "./i18n";

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
        <Route path={`${urlHost}/Resume`} element={<ResumeScreen />} />
      </Route>
    </Routes>
    <Routes></Routes>
  </BrowserRouter>
);
