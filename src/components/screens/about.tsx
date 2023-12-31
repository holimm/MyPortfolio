import {
  Card,
  Col,
  Divider,
  Flex,
  Image,
  List,
  Row,
  Space,
  Typography,
} from "antd";
import "../../css/scrollbar.css";
import AvatarHoLim from "../../assets/img/avatar.jpg";
import {
  BlockItem,
  BlockItemImage,
  CustomTypographyParagraph,
  CustomTypographyTitle,
  IconButton,
  PageLayout,
  SkillList,
} from "../common";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { skillData } from "../../variables/const";
import GitHubCalendar from "react-github-calendar";

export const AboutScreen = () => {
  const renderSkillRow = (type: string) => {
    return (
      <div className="mt-8">
        <CustomTypographyParagraph>
          <b>{type}</b>
        </CustomTypographyParagraph>
        <SkillList skillData={skillData.filter((item) => item.type === type)} />
      </div>
    );
  };

  return (
    <PageLayout>
      <div className="h-full w-[55%] mt-32 pb-28 grid grid-cols-1 gap-y-5">
        <Row gutter={20}>
          <Col span={14} className="h-full w-full">
            <BlockItem>
              <Flex className="h-full w-full " justify="center" align="center">
                <div className="h-fit w-full">
                  <CustomTypographyTitle>About</CustomTypographyTitle>
                  <CustomTypographyParagraph>
                    Hi, I'm Nguyen Lim Thai Ho, a front-end developer passionate
                    about making awesome websites. I love turning designs into
                    functional, enjoyable user experiences. <br />
                    <br />I pay attention to details and enjoy improving website
                    performance. Beyond coding, I stay updated on the latest web
                    trends through online learning. Excited for new challenges
                    and opportunities to grow!
                  </CustomTypographyParagraph>
                  <Space className="mt-3" direction="horizontal" size="large">
                    <IconButton
                      icon={
                        <FaFacebook
                          size={40}
                          className="fill-black dark:fill-white"
                        />
                      }
                    ></IconButton>
                    <IconButton
                      icon={
                        <FaInstagram
                          size={40}
                          className="fill-black dark:fill-white"
                        />
                      }
                    ></IconButton>
                    <IconButton
                      icon={
                        <FaGithub
                          size={40}
                          className="fill-black dark:fill-white"
                        />
                      }
                    ></IconButton>
                  </Space>
                </div>
              </Flex>
            </BlockItem>
          </Col>
          <Col span={10} className="h-full w-full ">
            <BlockItemImage avatar={AvatarHoLim} />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={24} className="h-full w-full">
            <BlockItem>
              <Flex className="h-full w-full " justify="center" align="center">
                <div className="h-fit w-full">
                  <CustomTypographyTitle>My Skills</CustomTypographyTitle>
                  {renderSkillRow("Front-end")}
                  {renderSkillRow("Back-end")}
                  {renderSkillRow("Database")}
                  {renderSkillRow("Tools")}
                </div>
              </Flex>
            </BlockItem>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={24} className="h-full w-full">
            <BlockItem>
              <div className="h-full w-full flex justify-center items-center">
                <div>
                  <CustomTypographyTitle extraClass="text-center">
                    GitHub Contributions
                  </CustomTypographyTitle>
                  <div className="mt-12">
                    <GitHubCalendar username="holimm" />
                  </div>
                </div>
              </div>
            </BlockItem>
          </Col>
        </Row>
      </div>
    </PageLayout>
  );
};
