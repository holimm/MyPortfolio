import React, { useCallback } from "react";
import ReactDOM from "react-dom/client";
import Particle from "./particles/particles.tsx";
import "./css/scrollbar.css";
import { App } from "./app.tsx";

const Index = () => {
  const renderParticle = useCallback(() => <Particle />, []);
  return (
    <>
      <div className="h-full w-full absolute top-0 z-10">
        {renderParticle()}
      </div>
      <App />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<Index />);
