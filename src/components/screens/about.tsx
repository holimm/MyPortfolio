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
  BlockItemPDF,
  CustomTypographyParagraph,
  CustomTypographyTitle,
  IconButton,
  PageLayout,
  RenderPDFItem,
  SkillList,
} from "../common";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaNimblr,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { skillData } from "../../variables/const";
import GitHubCalendar from "react-github-calendar";
import { Document, Page } from "react-pdf";
import React_Basic_Certificate from "../../assets/img/certificates/React_Basic_Certificate.png";

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
  const renderCertificate = (certificate: any) => {
    return (
      <Col span={12}>
        <Image src={certificate} />
      </Col>
    );
  };

  return (
    <PageLayout>
      <div className="h-full w-[55%] mt-24 pb-28 grid grid-cols-1 gap-y-5">
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
                        <FaLinkedin
                          size={40}
                          className="fill-black dark:fill-white"
                        />
                      }
                      url="https://www.linkedin.com/in/nguyen-lim-thai-ho/"
                    ></IconButton>
                    <IconButton
                      icon={
                        <FaFacebook
                          size={40}
                          className="fill-black dark:fill-white"
                        />
                      }
                      url="https://www.facebook.com/tea.limho/"
                    ></IconButton>
                    <IconButton
                      icon={
                        <FaInstagram
                          size={40}
                          className="fill-black dark:fill-white"
                        />
                      }
                      url="https://www.instagram.com/millohh_/"
                    ></IconButton>
                    <IconButton
                      icon={
                        <FaGithub
                          size={40}
                          className="fill-black dark:fill-white"
                        />
                      }
                      url="https://github.com/holimm"
                    ></IconButton>
                    <IconButton
                      icon={
                        <IoIosMail
                          size={40}
                          className="fill-black dark:fill-white"
                        />
                      }
                      url="mailto:kahn12345678@gmail.com"
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
                  <CustomTypographyTitle>
                    My{" "}
                    <span className="underline decoration-4 decoration-fuchsia-800">
                      Skills
                    </span>
                  </CustomTypographyTitle>
                  {renderSkillRow("Front-end")}
                  {renderSkillRow("Back-end")}
                  {renderSkillRow("Database")}
                  {renderSkillRow("Tools")}
                </div>
              </Flex>
            </BlockItem>
          </Col>
        </Row>
        <Row className="inline-block" gutter={20}>
          <Col span={24} className="h-full w-full">
            <BlockItem>
              <CustomTypographyTitle>Certificates</CustomTypographyTitle>
              <Row gutter={20}>
                {renderCertificate(React_Basic_Certificate)}
              </Row>
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
                  <div className="w-fit xs:max-w-[24%] sm:max-w-[30%] md:max-w-[50%] lg:max-w-[65%] xl:max-w-full mx-auto mt-12 text-black dark:text-white ">
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
