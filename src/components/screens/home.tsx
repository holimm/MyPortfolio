import { Button, Col, Flex, Row } from "antd";
import "../../css/scrollbar.css";
import {
  BlockItem,
  CustomTypographyParagraph,
  CustomTypographyTitle,
  PageLayout,
} from "../common";
import { ArrowRightOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import { useOutletContext } from "react-router-dom";
import { useLocalization } from "../../hooks/useLocalization";
import MyImage from "../../assets/img/avatar.png";

export const HomeScreen = () => {
  const { translate } = useLocalization();
  const handleChangeTab: Function = useOutletContext();
  return (
    <PageLayout>
      <Flex
        className="h-screen w-full mb-20 md:mb-0"
        justify="center"
        align="center"
      >
        <div className="h-fit w-[95%] lg:w-[72%] xl:w-[55%] mt-40 lg:mt-0">
          {/* <div className="h-fit w-[70vw] px-10 py-6 text-center bg-white/80 rounded-xl"> */}
          <BlockItem className="!px-0 !py-0 h-fit min-h-[70vh]">
            <div className="h-fit w-full">
              <Row
                className="h-[50vh] w-full relative block md:hidden"
                gutter={10}
              >
                <div className="h-full w-full bg-dotted">
                  <div
                    className="h-full w-full bg-contain bg-no-repeat bg-bottom absolute bottom-0 z-20"
                    style={{ backgroundImage: `url(${MyImage})` }}
                  ></div>
                </div>
              </Row>
              <Row className="h-fit w-full" gutter={10}>
                <Col
                  className="h-[70vh] w-full md:block hidden"
                  span={12}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                >
                  {/* <Lottie
                    className="w-[75%] md:w-full mx-auto mt-10"
                    animationData={purpleBot}
                  /> */}
                  <div className="h-full w-full bg-dotted">
                    <div
                      className="h-full w-full bg-cover bg-no-repeat bg-bottom absolute bottom-0 z-20"
                      style={{ backgroundImage: `url(${MyImage})` }}
                    ></div>
                    <div className="h-20 w-full absolute bottom-0 z-10"></div>
                  </div>
                </Col>
                <Col span={12} xs={{ span: 24 }} md={{ span: 12 }}>
                  <div className="h-1/2 md:h-full w-full grid grid-cols-1 p-5 pb-14">
                    <Flex
                      className="h-full w-full mt-5 md:mt-0"
                      align="start"
                      justify="center"
                      vertical
                    >
                      <div className="h-fit w-full">
                        <CustomTypographyTitle extraClass={`!text-5xl w-fit`}>
                          <span className="bg-gradient-to-r from-purple-700 to-fuchsia-700 text-transparent bg-clip-text">
                            {translate("Home.Greeting")},
                          </span>
                          <CustomTypographyTitle extraClass="!text-4xl mt-2 font-extralight text-black dark:text-white">
                            {translate("Home.Greeting.Welcome")}
                          </CustomTypographyTitle>
                        </CustomTypographyTitle>
                        <span onClick={() => handleChangeTab("About")}>
                          <CustomTypographyParagraph extraClass="w-fit -mt-5 text-center cursor-pointer hover:scale-105 transition">
                            {translate("Home.Greeting.More")} &nbsp;
                            <ArrowRightOutlined />
                          </CustomTypographyParagraph>
                        </span>
                        <Button
                          className="w-fit mt-4 bg-yellow-400"
                          onClick={() => handleChangeTab("Resume")}
                          icon={<CloudDownloadOutlined />}
                          type="text"
                        >
                          {translate("Home.Greeting.Resume")}
                        </Button>
                      </div>
                    </Flex>
                  </div>
                </Col>
              </Row>
            </div>
          </BlockItem>
        </div>
      </Flex>
    </PageLayout>
  );
};
