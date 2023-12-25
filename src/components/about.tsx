import { Col, Divider, Flex, Image, List, Row, Typography } from "antd";
import "../css/scrollbar.css";
import { ScreenStyle, themeTextColor } from "../variables/const";
import AvatarImage from "../assets/img/avatar.jpg";
import Particle from "../particles/particles";
import "../css/star.css";
import { useCallback, useRef } from "react";
import Lottie from "lottie-react";
import programmingAnimation from "../assets/json/young-programmer.json";
import meetingAnimation from "../assets/json/meeting.json";
import TypeAnimation from "react-type-animation";

export const AboutScreen = () => {
  const refProgrammingDesk = useRef(null);
  return (
    <div className={`${ScreenStyle} dark`}>
      <div className="h-fit w-full max-h-screen overflow-y-auto overflow-x-hidden">
        <div className="h-screen w-full bg-gradient-to-tl from-sky-400 to-sky-300 dark:bg-black relative">
          <div className="h-full w-full absolute z-10 background-star">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>
          <Row className="h-full w-full absolute top-0 z-20 px-40" gutter={50}>
            <Col span={12}>
              <Flex className="h-full" justify="center" align="center" vertical>
                <div className="h-fit w-full text-center">
                  <h1 className="text-xl text-white">Greetings! my name is</h1>
                  <h1 className={`text-7xl text-blue-600 font-bold mt-2`}>
                    Erys Mozo
                  </h1>
                  <h1 className="text-xl text-white mt-8">
                    <TypeAnimation
                      sequence={[
                        "I'm into Web development",
                        1000,
                        "I'm into Front-end development",
                        1000,
                        "I'm into Back-end development",
                        1000,
                        "I'm into Fullstack development",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </h1>
                </div>
              </Flex>
            </Col>
            <Col span={12}>
              <Flex className="h-full" justify="center" align="center">
                <Lottie animationData={programmingAnimation} />
              </Flex>
            </Col>
          </Row>
        </div>
        <div className="h-fit w-full bg-sky-50 px-52 py-60">
          <Row className="h-full w-full" gutter={50}>
            <Col span={14}>
              <Flex className="h-full w-full" justify="center" align="center">
                <div className="h-fit w-full">
                  <Typography.Title>
                    <p className={`text-5xl text-${themeTextColor} font-bold`}>
                      About
                    </p>
                  </Typography.Title>
                  <Typography.Paragraph className="text-xl">
                    Hi, I'm Erys, a front-end developer passionate about making
                    awesome websites. I love turning designs into functional,
                    enjoyable user experiences. <br />
                    <br />I pay attention to details and enjoy improving website
                    performance. Beyond coding, I stay updated on the latest web
                    trends through online learning. Excited for new challenges
                    and opportunities to grow!
                  </Typography.Paragraph>
                </div>
              </Flex>
            </Col>
            <Col span={10}>
              <Flex className="h-full" justify="center" align="start">
                <Lottie animationData={meetingAnimation} />
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
