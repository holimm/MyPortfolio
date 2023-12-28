import React, { ReactNode, useCallback, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import Particle from "./particles/particles.tsx";
import "./css/scrollbar.css";
import { Button, Carousel, Col, Flex, Row, Space } from "antd";
import { AboutScreen } from "./components/screens/about.tsx";
import { isEmpty, isEqual } from "lodash";
import { ProjectScreen } from "./components/screens/projects.tsx";
import { ContactScreen } from "./components/screens/contact.tsx";
import { HomeScreen } from "./components/screens/home.tsx";
import "./css/common.css";
import { Outlet, useNavigate } from "react-router-dom";
import { ChangingScreenAnimation } from "./components/common.tsx";
import ReactPlayer from "react-player";

interface TopNavDataType {
  label: string;
}

export const App = () => {
  const [currentSlide, setCurrentSlide] = useState("Home");
  const [screenChanging, setScreenChanging] = useState(false);
  const [screenOpenUp, setScreenOpenUp] = useState(false);
  const checkScreenChangingAnimation = screenChanging && screenOpenUp;
  const navigate = useNavigate();
  const [particle] = useState(<Particle />);

  const topNavData = [
    {
      id: 0,
      label: "Home",
      screen: <HomeScreen />,
    },
    {
      id: 1,
      label: "About",
      screen: <AboutScreen />,
    },
    {
      id: 2,
      label: "Projects",
      screen: <ProjectScreen />,
    },
    {
      id: 3,
      label: "Contact",
      screen: <ContactScreen />,
    },
  ];

  const handleChangeTab = (label: string) => {
    if (screenOpenUp) return;
    if (label === currentSlide) return;
    else {
      setScreenChanging(true);
      setCurrentSlide(label);
    }
  };

  const handleNavigate = () => {
    if (screenOpenUp) return;
    else {
      setScreenChanging(false);
      setScreenOpenUp(true);
      navigate(currentSlide);
    }
  };

  const renderTopNav = (item: TopNavDataType, index: number) => {
    return (
      <Button
        type={`${item.label === currentSlide ? "link" : "text"}`}
        onClick={() => handleChangeTab(item.label)}
        block
      >
        {item.label}
      </Button>
    );
  };

  return (
    <>
      <div className="h-12 w-full fixed top-5 z-50">
        <div className="h-full w-fit flex justify-center items-center mx-auto px-5 py-2 bg-white rounded-full shadow-md">
          <div className="grid grid-cols-4 gap-10">
            {topNavData.map((item, index) => (
              <>{renderTopNav(item, index)}</>
            ))}
          </div>
        </div>
      </div>
      <div className="relative top-0 z-40">
        <ChangingScreenAnimation
          screenChanging={screenChanging}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          zIndex="z-10"
          color="bg-sky-200"
        />
        <ChangingScreenAnimation
          screenChanging={screenChanging}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          zIndex="z-20"
          color="bg-sky-300"
          onAnimationComplete={handleNavigate}
        />
        <ChangingScreenAnimation
          screenChanging={screenOpenUp}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          zIndex="z-10"
          color="bg-sky-200"
          onAnimationComplete={() => {
            setScreenOpenUp(false);
          }}
        />
        <ChangingScreenAnimation
          screenChanging={screenOpenUp}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          zIndex="z-20"
          color="bg-sky-300"
        />
      </div>
      <div className="h-full w-full overflow-hidden relative aspect-video scale-custom md:scale-150 lg:scale-[1.2] z-20">
        <ReactPlayer
          className="object-cover absolute"
          url={`https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/1127f03c832f3ee0b2a51265e385828e2d910686.webm`}
          width={"100%"}
          height={"100%"}
          playing={true}
          loop={true}
          muted={true}
        />
      </div>
      <div className="h-screen w-screen absolute top-0 z-30">
        <div className="h-full w-full bg-transparent backdrop-blur-sm">
          <Outlet />
        </div>
      </div>
    </>
  );
};
