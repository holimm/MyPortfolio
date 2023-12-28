import { Button, Col, Divider, Flex, Image, List, Row, Typography } from "antd";
import "../../css/scrollbar.css";
import Lottie from "lottie-react";
import programmingAnimation from "../../assets/json/young-programmer.json";
import TypeAnimation from "react-type-animation";
import { CustomTypographyParagraph, PageLayout, ScreenLayout } from "../common";
import { ArrowRightOutlined, CloudDownloadOutlined } from "@ant-design/icons";

export const HomeScreen = () => {
  return (
    <PageLayout>
      <Flex className="h-[95vh] w-full" justify="center" align="center">
        <div className="h-fit w-fit">
          <div className="h-fit w-full text-center">
            <h1 className={`text-6xl text-blue-900 font-bold`}>
              <TypeAnimation
                sequence={["Welcome to my Portfolio", 1000, "", 1000]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <CustomTypographyParagraph extraClass="mt-8">
              More about me &nbsp;
              <ArrowRightOutlined />
            </CustomTypographyParagraph>
            <Button
              className="mt-8 bg-yellow-400"
              icon={<CloudDownloadOutlined />}
              type="text"
            >
              RESUME
            </Button>
          </div>
          {/* <Lottie
            className="h-[60%] w-[60%] mx-auto"
            animationData={programmingAnimation}
          /> */}
        </div>
      </Flex>
    </PageLayout>
  );
};
