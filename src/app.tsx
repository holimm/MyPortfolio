import { useState } from "react";
import "./css/scrollbar.css";
import { Button, Dropdown, DropdownProps, MenuProps, Switch } from "antd";
import { isEmpty } from "lodash";
import { motion } from "framer-motion";
import "./css/common.css";
import { Outlet, useNavigate } from "react-router-dom";
import {
  BlockItemHeader,
  BlockItemMenu,
  ChangingScreenAnimation,
} from "./components/common.tsx";
import ReactPlayer from "react-player";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useLocalization } from "./hooks/useLocalization.tsx";
import { TopNavData } from "./variables/const.tsx";
import { TopNavDataType } from "./variables/type.ts";

export const App = () => {
  const pathURL = window.location.pathname.match(/\/MyPortfolio\/(.*)/);
  const { language, changeLanguage } = useLocalization();
  const [currentSlide, setCurrentSlide] = useState(
    !isEmpty(pathURL) && pathURL !== null ? `${pathURL[1]}` : "Home"
  );
  const [screenChanging, setScreenChanging] = useState(false);
  const [screenOpenUp, setScreenOpenUp] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const topNavData = TopNavData();

  const handleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  const handleChangeLanguage = (checked: boolean) => {
    changeLanguage(checked ? "vi" : "en");
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
            onChange={handleChangeLanguage}
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
      <motion.h1
        className={`h-fit w-fit font-montserrat font-semibold text-black dark:text-white ${
          item.tab === currentSlide &&
          "!bg-gradient-to-r !from-purple-800 !to-fuchsia-800 !text-transparent !bg-clip-text"
        } cursor-pointer`}
        onClick={() => handleChangeTab(item.tab)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
      >
        {item.label}
      </motion.h1>
    );
  };
  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpenMenu(nextOpen);
    }
  };

  return (
    <div
      className={`h-screen w-screen ${
        darkMode && "dark"
      } overflow-x-hidden overflow-y-hidden`}
    >
      <BlockItemHeader
        makeUnder={currentSlide === "Resume"}
        checkTab={!isEmpty(pathURL) && `${pathURL[1]}`}
      >
        {topNavData.map((item, index) => (
          <div className="flex justify-center items-center underline-animate">
            {renderTopNav(item, index)}
          </div>
        ))}
        <div className="hidden lg:block">
          <div className="flex justify-center items-center">
            <Button
              className="shadow"
              icon={
                darkMode ? (
                  <FaMoon
                    className="fill-black dark:fill-white mt-[0.2em]"
                    size={"15px"}
                  />
                ) : (
                  <MdOutlineLightMode
                    className="fill-black dark:fill-white mt-[0.125em]"
                    size={"18px"}
                  />
                )
              }
              onClick={() => handleDarkMode(!darkMode)}
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-center items-center">
            <Button
              className="shadow"
              onClick={() => handleChangeLanguage(language === "en")}
            >
              <span className="uppercase text-black dark:text-white">
                {language}
              </span>
            </Button>
          </div>
        </div>
      </BlockItemHeader>
      <div className="block lg:hidden">
        <BlockItemMenu>
          <Dropdown
            menu={{ items }}
            onOpenChange={handleOpenChange}
            open={openMenu}
            placement="topLeft"
          >
            <span
              className="cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <GiHamburgerMenu
                className="fill-black dark:fill-white hover:scale-[1.2] transition-all"
                size={20}
              />
            </span>
          </Dropdown>
        </BlockItemMenu>
      </div>
      <div className="h-screen w-screen absolute top-0 z-30 bg-transparent dark:bg-black/50"></div>
      <div className="relative top-0 z-40">
        <ChangingScreenAnimation
          screenChanging={screenChanging}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          zIndex="z-20"
          color="bg-[#2d054c]"
        />
        <ChangingScreenAnimation
          screenChanging={screenChanging}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          zIndex="z-30"
          color="bg-[#1f0434]"
          onAnimationComplete={handleNavigate}
        />
        <ChangingScreenAnimation
          screenChanging={screenOpenUp}
          initial={{ y: 0 }}
          animate={{ y: "100vh" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
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
          transition={{ duration: 0.5, ease: "easeInOut" }}
          zIndex="z-30"
          color="bg-[#1f0434]"
        />
      </div>

      <div className="h-full w-full overflow-hidden relative scale-custom scale-[6] md:scale-[4] lg:scale-[1.8] xl:scale-[1.2] z-20 bg-slate-500">
        <ReactPlayer
          className="object-fill absolute top-0"
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
