import { Button, Col, Divider, Flex, Image, List, Row, Typography } from "antd";
import "../../css/scrollbar.css";
import Lottie from "lottie-react";
import purpleBot from "../../assets/json/purple-bot.json";
import TypeAnimation from "react-type-animation";
import {
  BlockItem,
  CustomTypographyParagraph,
  CustomTypographyTitle,
  PageLayout,
  PageNoFooterLayout,
  ScreenLayout,
} from "../common";
import { ArrowRightOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { themeTextColor } from "../../variables/const";
import { useTranslation } from "react-i18next";

export const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const handleChangeTab = useOutletContext();
  // console.log(handleChangeTab);
  return (
    <PageNoFooterLayout>
      <Flex className="h-[95vh] w-full" justify="center" align="center">
        <div className="h-fit w-fit">
          {/* <div className="h-fit w-[70vw] px-10 py-6 text-center bg-white/80 rounded-xl"> */}
          <BlockItem>
            <div className="h-[60vh] w-[65vw]">
              <Row className="h-full w-full" gutter={32}>
                <Col className="h-full" span={12}>
                  <Flex
                    className="h-full w-full"
                    justify="center"
                    align="center"
                  >
                    <Lottie
                      className="mx-auto mt-10"
                      animationData={purpleBot}
                    />
                  </Flex>
                </Col>
                <Col span={12}>
                  <div className="h-full w-full grid grid-cols-1">
                    <Flex align="start" justify="center" vertical>
                      {/* <TypeAnimation
                        sequence={["Welcome to my Portfolio..", 1000, "", 1000]}
                        wrapper="span"
                        speed={50}
                        style={{ display: "inline-block" }}
                        repeat={Infinity}
                      /> */}
                      <CustomTypographyTitle
                        extraClass={`!text-5xl w-fit !text-fuchsia-600`}
                      >
                        Greeting, {t("Welcome to React")}
                        <CustomTypographyTitle extraClass="!text-4xl mt-2 font-extralight text-black dark:text-white">
                          Welcome to my portfolio
                        </CustomTypographyTitle>
                      </CustomTypographyTitle>
                      <a onClick={() => handleChangeTab("About")}>
                        <CustomTypographyParagraph extraClass="w-fit mx-auto -mt-9 text-center cursor-pointer hover:scale-105 transition">
                          More about me &nbsp;
                          <ArrowRightOutlined />
                        </CustomTypographyParagraph>
                      </a>
                      <Button
                        className="w-fit mt-4 bg-yellow-400"
                        onClick={() => handleChangeTab("Resume")}
                        icon={<CloudDownloadOutlined />}
                        type="text"
                      >
                        RESUME
                      </Button>
                    </Flex>
                  </div>
                </Col>
              </Row>
            </div>
          </BlockItem>
          {/* </div> */}
        </div>
      </Flex>
    </PageNoFooterLayout>
  );
};
