import { Button, Col, Divider, Flex, Image, List, Row, Typography } from "antd";
import "../../css/scrollbar.css";
import Lottie from "lottie-react";
import helloPerson from "../../assets/json/hello-person.json";
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

export const HomeScreen = () => {
  const handleChangeTab = useOutletContext();
  // console.log(handleChangeTab);
  return (
    <PageNoFooterLayout>
      <Flex className="h-[95vh] w-full" justify="center" align="center">
        <div className="h-fit w-fit">
          {/* <div className="h-fit w-[70vw] px-10 py-6 text-center bg-white/80 rounded-xl"> */}
          <BlockItem>
            <div className="h-[60vh] w-[65vw]">
              <Row gutter={32}>
                <Col span={12}>
                  <Lottie className="mx-auto" animationData={helloPerson} />
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
                      <CustomTypographyTitle extraClass="w-fit">
                        Greeting,
                        <p className="mt-2">Welcome to my portfolio</p>
                      </CustomTypographyTitle>
                      <a onClick={() => handleChangeTab("About")}>
                        <CustomTypographyParagraph extraClass="w-fit mx-auto text-center cursor-pointer hover:scale-105 transition">
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
