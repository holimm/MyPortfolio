import React, { useCallback, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import Particle from "./particles/particles.tsx";
import "./css/scrollbar.css";
import { Button, Carousel, Col, Flex, Row, Space } from "antd";
import { AboutScreen } from "./components/screens/about.tsx";
import { isEmpty, isEqual } from "lodash";
import { ProjectScreen } from "./components/screens/projects.tsx";
import { ContactScreen } from "./components/screens/contact.tsx";
import { HomeScreen } from "./components/screens/home.tsx";
import "./css/common.css";

interface TopNavDataType {
  label: string;
}

export const App = () => {
  const refCarousel = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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
      <div className="h-screen w-screen bg-gradient-to-r from-blue-300 to-sky-300">
        <div className="h-full w-full bg-white/80 backdrop-blur-xl">
          <div className="h-12 w-full fixed top-5 z-50">
            <div className="h-full w-fit flex justify-center items-center mx-auto px-5 py-2 bg-white rounded-full shadow-md">
              <div className="grid grid-cols-4 gap-10">
                {topNavData.map((item, index) => (
                  <>{renderTopNav(item, index)}</>
                ))}
              </div>
            </div>
          </div>
          <Carousel
            afterChange={onChangeTab}
            className="z-20"
            dots={false}
            speed={1000}
            ref={refCarousel}
          >
            {topNavData.map((item) => item.screen)}
          </Carousel>
        </div>
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<App />);
