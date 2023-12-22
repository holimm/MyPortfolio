import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import TypeAnimation from "react-type-animation";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import Particle from "./particles/particles.tsx";
import "./css/scrollbar.css";
import { Button, Col, Flex, Row, Space } from "antd";
import {
  FacebookOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import {
  IconButton,
  RenderAnimateTab,
  RenderAnimateTab2,
  RenderTab,
} from "./components/common.tsx";
import { SkillScreen } from "./components/skills.tsx";
import { AboutScreen } from "./components/about.tsx";
import { isEmpty, isEqual } from "lodash";
import { ProjectScreen } from "./components/projects.tsx";
import { EducationScreen } from "./components/education.tsx";

export const App = () => {
  const [particle] = useState(<Particle />);
  const [screenChanging, setScreenChanging] = useState<any>();
  const [currentScreen, setCurrentScreen] = useState<any>(<AboutScreen />);

  const handleChangeTab = (screen: any) => {
    if (isEmpty(screenChanging) && !isEqual(currentScreen, screen))
      setScreenChanging(screen);
  };
  const handleChangeCurrentScreen = () => {
    setCurrentScreen(screenChanging);
    setScreenChanging(undefined);
  };
  const renderParticle = useCallback(() => <Particle />, []);
  return (
    <>
      <div className="h-full w-full absolute top-0 z-10">
        {renderParticle()}
      </div>
      <div className="h-screen w-screen bg-neutral-900">
        <div className="h-12 w-full fixed top-5 z-50">
          <div className="h-full w-fit flex justify-center items-center mx-auto px-5 py-2 bg-white rounded-full shadow-md">
            <div className="grid grid-cols-4 gap-10">
              <Button
                type="text"
                onClick={() => handleChangeTab(<AboutScreen />)}
                disabled={isEqual(currentScreen, <AboutScreen />)}
              >
                About
              </Button>
              <Button
                type="text"
                onClick={() => handleChangeTab(<SkillScreen />)}
              >
                Skills
              </Button>
              <Button
                type="text"
                onClick={() => handleChangeTab(<ProjectScreen />)}
              >
                Projects
              </Button>
              <Button
                type="text"
                onClick={() => handleChangeTab(<EducationScreen />)}
              >
                Education
              </Button>
            </div>
          </div>
        </div>
        <div className="h-fit w-fit px-2 py-5 absolute bottom-20 right-16 z-50 bg-white rounded-full">
          <Space direction="vertical">
            <IconButton icon={<FaFacebook size={26} />}></IconButton>
            <IconButton icon={<FaInstagram size={26} />}></IconButton>
            <IconButton icon={<FaGithub size={26} />}></IconButton>
          </Space>
        </div>
        <RenderTab>{currentScreen}</RenderTab>
        {!isEmpty(screenChanging) && (
          <RenderAnimateTab
            handleChangeCurrentScreen={handleChangeCurrentScreen}
          >
            {screenChanging}
          </RenderAnimateTab>
        )}
        {!isEmpty(screenChanging) && (
          <RenderAnimateTab2
            handleChangeCurrentScreen={handleChangeCurrentScreen}
          >
            {currentScreen}
          </RenderAnimateTab2>
        )}
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<App />);
