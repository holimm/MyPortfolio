import React, { useCallback, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import TypeAnimation from "react-type-animation";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import Particle from "./particles/particles.tsx";
import "./css/scrollbar.css";
import { Button, Carousel, Col, Flex, Row, Space } from "antd";
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

interface TopNavDataType {
  label: string;
}

export const App = () => {
  const refCarousel = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [particle] = useState(<Particle />);
  const topNavData = [
    {
      label: "About",
    },
    {
      label: "Skills",
    },
    {
      label: "Projects",
    },
    {
      label: "Education",
    },
  ];

  const handleChangeTab = (page: number) => {
    refCarousel.current.goTo(page, false);
  };

  const onChangeTab = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  // <a
  //   class="group text-pink-500 transition-all duration-300 ease-in-out"
  //   href="#"
  // >
  //   <span class="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
  //     This text gets 'underlined' on hover
  //   </span>
  // </a>;
  const renderTopNav = (item: TopNavDataType, index: number) => {
    return (
      <Button
        type={`${index === currentSlide ? "link" : "text"}`}
        onClick={() => handleChangeTab(index)}
        block
      >
        {item.label}
      </Button>
    );
  };

  const renderParticle = useCallback(() => <Particle />, []);
  return (
    <>
      <div className="h-screen w-screen">
        <div className="h-12 w-full fixed top-5 z-50">
          <div className="h-full w-fit flex justify-center items-center mx-auto px-5 py-2 bg-white rounded-full shadow-md">
            <div className="grid grid-cols-4 gap-10">
              {topNavData.map((item, index) => (
                <>{renderTopNav(item, index)}</>
              ))}
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
        <Carousel
          afterChange={onChangeTab}
          className="z-20"
          dots={false}
          speed={1000}
          ref={refCarousel}
        >
          <AboutScreen />
          <SkillScreen />
          <ProjectScreen />
          <EducationScreen />
        </Carousel>
        {/* <RenderTab>{currentScreen}</RenderTab> */}
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<App />);
