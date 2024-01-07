import { Button, Col, Divider, Flex, Image, List, Row, Typography } from "antd";
import "../../css/scrollbar.css";
import Lottie from "lottie-react";
import purpleBot from "../../assets/json/purple-bot.json";
import wavePurple from "../../assets/json/wave-purple.json";
import TypeAnimation from "react-type-animation";
import {
  BlockItem,
  CustomTypographyParagraph,
  CustomTypographyTitle,
  PageLayout,
} from "../common";
import { ArrowRightOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { themeTextColor } from "../../variables/const";
import { useTranslation } from "react-i18next";
import { useLocalization } from "../../hooks/useLocalization";

export const HomeScreen = () => {
  const { translate } = useLocalization();
  const handleChangeTab: Function = useOutletContext();
  return (
    <PageLayout>
      <Flex className="h-screen w-full" justify="center" align="center">
        <div className="h-fit w-[95%] lg:w-[72%] xl:w-[55%] mt-16 lg:mt-0">
          {/* <div className="h-fit w-[70vw] px-10 py-6 text-center bg-white/80 rounded-xl"> */}
          <BlockItem>
            <div className="h-fit w-full">
              <Row className="h-full w-full" gutter={32}>
                <Col
                  className="h-1/2 md:h-full relative"
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                >
                  <Flex
                    className="h-full w-full md:w-full"
                    justify="center"
                    align="center"
                  >
                    <Lottie
                      className="w-[75%] md:w-full mx-auto mt-10"
                      animationData={purpleBot}
                    />
                  </Flex>
                </Col>
                <Col span={12} xs={{ span: 24 }} md={{ span: 12 }}>
                  <div className="h-1/2 md:h-full w-full grid grid-cols-1">
                    <Flex
                      className="mt-5 md:mt-0"
                      align="start"
                      justify="center"
                      vertical
                    >
                      <CustomTypographyTitle
                        extraClass={`!text-5xl w-fit !text-fuchsia-600`}
                      >
                        {translate("Home.Greeting")},
                        <CustomTypographyTitle extraClass="!text-4xl mt-2 font-extralight text-black dark:text-white">
                          {translate("Home.Greeting.Welcome")}
                        </CustomTypographyTitle>
                      </CustomTypographyTitle>
                      <a onClick={() => handleChangeTab("About")}>
                        <CustomTypographyParagraph extraClass="w-fit mx-auto -mt-9 text-center cursor-pointer hover:scale-105 transition">
                          {translate("Home.Greeting.More")} &nbsp;
                          <ArrowRightOutlined />
                        </CustomTypographyParagraph>
                      </a>
                      <Button
                        className="w-fit mt-4 bg-yellow-400"
                        onClick={() => handleChangeTab("Resume")}
                        icon={<CloudDownloadOutlined />}
                        type="text"
                      >
                        {translate("Home.Greeting.Resume")}
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
    </PageLayout>
  );
};
