import { Col, Divider, Flex, Image, List, Row, Typography } from "antd";
import "../../css/scrollbar.css";
import Lottie from "lottie-react";
import programmingAnimation from "../../assets/json/young-programmer.json";
import TypeAnimation from "react-type-animation";
import { PageLayout, ScreenLayout } from "../common";

export const HomeScreen = () => {
  return (
    <PageLayout>
      <Row className="h-full w-full px-40" gutter={50}>
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
    </PageLayout>
  );
};
