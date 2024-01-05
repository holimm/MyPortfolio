import React, { ReactNode, useCallback, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import Particle from "./particles/particles.tsx";
import "./css/scrollbar.css";
import {
  Button,
  Carousel,
  Col,
  Dropdown,
  DropdownProps,
  Flex,
  MenuProps,
  Row,
  Space,
  Switch,
} from "antd";
import { AboutScreen } from "./components/screens/about.tsx";
import { isEmpty, isEqual } from "lodash";
import { ProjectScreen } from "./components/screens/projects.tsx";
import { ContactScreen } from "./components/screens/contact.tsx";
import { HomeScreen } from "./components/screens/home.tsx";
import "./css/common.css";
import { Outlet, useNavigate } from "react-router-dom";
import {
  BlockItemHeader,
  BlockItemMenu,
  ChangingScreenAnimation,
} from "./components/common.tsx";
import ReactPlayer from "react-player";
import { FaMoon, FaSun } from "react-icons/fa";
import { pdfjs } from "react-pdf";
import { GiHamburgerMenu } from "react-icons/gi";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface TopNavDataType {
  label: string;
}

export const App = () => {
  const pathURL = window.location.pathname.match(/\/MyPortfolio\/(.*)/);
  const [currentSlide, setCurrentSlide] = useState(
    !isEmpty(pathURL) && pathURL !== null ? `${pathURL[1]}` : "Home"
  );
  const [screenChanging, setScreenChanging] = useState(false);
  const [screenOpenUp, setScreenOpenUp] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const checkScreenChangingAnimation = screenChanging && screenOpenUp;
  const navigate = useNavigate();
  const [particle] = useState(<Particle />);

  const topNavData = [
    {
      id: 0,
      label: "Home",
    },
    {
      id: 1,
      label: "About",
    },
    {
      id: 2,
      label: "Projects",
    },
    {
      id: 3,
      label: "Contact",
    },
  ];

  const handleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex justify-start items-center">
          <span className="mr-5">Dark Mode</span>
          <Switch
            className="bg-neutral-400"
            checkedChildren={"Dark"}
            unCheckedChildren={"Light"}
            onChange={handleDarkMode}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex justify-start items-center">
          <span className="mr-5">Languages</span>
          <Switch
            className="bg-neutral-400"
            checkedChildren={"VI"}
            unCheckedChildren={"EN"}
          />
        </div>
      ),
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
        className={`font-montserrat text-black dark:text-white ${
          item.label === currentSlide && "!text-fuchsia-800"
        }`}
        type="text"
        onClick={() => handleChangeTab(item.label)}
        block
      >
        {item.label}
      </Button>
    );
  };
  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpenMenu(nextOpen);
    }
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <BlockItemHeader>
        <div className="grid grid-cols-4 gap-10">
          {topNavData.map((item, index) => (
            <>{renderTopNav(item, index)}</>
          ))}
        </div>
      </BlockItemHeader>
      <BlockItemMenu>
        <Dropdown
          menu={{ items }}
          onOpenChange={handleOpenChange}
          open={openMenu}
          placement="topLeft"
        >
          <a className="cursor-pointer" onClick={(e) => e.preventDefault()}>
            <GiHamburgerMenu
              className="fill-black dark:fill-white hover:scale-[1.2] transition-all"
              size={20}
            />
          </a>
        </Dropdown>
      </BlockItemMenu>
      <div className="h-screen w-screen absolute top-0 z-30 bg-transparent dark:bg-black/50"></div>
      <div className="relative top-0 z-40">
        <ChangingScreenAnimation
          screenChanging={screenChanging}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          zIndex="z-20"
          color="bg-[#2d054c]"
        />
        <ChangingScreenAnimation
          screenChanging={screenChanging}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          zIndex="z-30"
          color="bg-[#1f0434]"
          onAnimationComplete={handleNavigate}
        />
        <ChangingScreenAnimation
          screenChanging={screenOpenUp}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          zIndex="z-20"
          color="bg-[#2d054c]"
          onAnimationComplete={() => {
            setScreenOpenUp(false);
          }}
        />
        <ChangingScreenAnimation
          screenChanging={screenOpenUp}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          zIndex="z-30"
          color="bg-[#1f0434]"
        />
      </div>

      <div className="h-full w-full overflow-hidden relative aspect-video scale-custom md:scale-150 lg:scale-[1.2] z-20">
        <ReactPlayer
          className="object-cover absolute"
          url={`https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1239690/f032ec4916fad9f6f64ecb7a9f083e835f65e362.mp4`}
          width={"100%"}
          height={"100%"}
          playing={true}
          loop={true}
          muted={true}
        />
      </div>
      <div className={`h-screen w-screen absolute top-0 z-30`}>
        <div className="h-full w-full bg-transparent backdrop-blur-sm !font-montserrat">
          <Outlet context={handleChangeTab} />
        </div>
      </div>
    </div>
  );
};
