import {
  Card,
  Carousel,
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
import { CaretRightOutlined } from "@ant-design/icons";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import MySimpleRadio from "../../assets/img/projects/MySimpleRadio/MySimpleRadio.png";
import MySimpleRadio_2 from "../../assets/img/projects/MySimpleRadio/MySimpleRadio_2.png";
import MineInUs from "../../assets/img/projects/MineInUs/MineInUs.png";
import ClothesEcommerce from "../../assets/img/projects/ClothesEcommerce/ClothesEcommerce.png";
import ResumeGenerator from "../../assets/img/projects/ResumeGenerator/ResumeGenerator.png";
import ResumeGenerator_2 from "../../assets/img/projects/ResumeGenerator/ResumeGenerator_2.png";
import MyBlog from "../../assets/img/projects/MyBlog/MyBlog.png";
import { isEmpty } from "lodash";

const dataIndustrySkill = [
  {
    row: "Worked on the company's app on the Zalo Mini App flatform to assist warehouse employees in submitting requests to address the issues they are currently facing.",
  },
  {
    row: "Developed features like barcode/QR code scanning and attaching multiple documents, images, or multimedia files to help support staff better understand the issue and make inputting more efficient.",
  },
  {
    row: "Helped solve bugs and errors in the front-end of the app.",
  },
  {
    row: "Researched and developed a UIPath unattended bot to automate the process of getting incoming emails or email replies, then processing them and sending them back to the back-end to create a request node or comment on an existing request node.",
  },
];

export const ProjectScreen = () => {
  const renderPersonalProjects = (
    images: any[],
    url: string,
    preview: string,
    title: string,
    desc: string
  ) => {
    return (
      <Card className="mt-5 dark:bg-[#0c0a09]" bordered={false}>
        <Carousel>
          {images.map((item, index) => (
            <div className="h-fit w-fit relative">
              <Image.PreviewGroup items={images}>
                <Image
                  className="h-fit w-fit aspect-video"
                  key={index}
                  src={item}
                />
              </Image.PreviewGroup>
              {/* <div className="h-full w-full bg-transparent dark:bg-black/[0.32] absolute top-0 z-20"></div> */}
            </div>
          ))}
        </Carousel>
        <Card.Meta
          className="!mt-4"
          title={
            <a href={url} target="_blank">
              <h1 className="w-fit text-2xl text-black dark:text-white font-montserrat hover:!text-fuchsia-800 transition-all">
                {title}
              </h1>
            </a>
          }
          description={
            <>
              <Typography.Paragraph
                className="text-lg text-black dark:text-white font-montserrat"
                ellipsis={{ rows: 4, expandable: true }}
              >
                {desc}
              </Typography.Paragraph>
              {!isEmpty(preview) && (
                <a href={preview} target="_blank">
                  <h1 className="w-fit text-lg -mt-2 text-fuchsia-800 dark:text-fuchsia-500 font-montserrat hover:!text-fuchsia-500 dark:hover:!text-fuchsia-800 transition-all">
                    <span>Preview</span>
                  </h1>
                </a>
              )}
            </>
          }
        />
      </Card>
    );
  };

  return (
    <PageLayout>
      <div className="h-full w-[55%] mt-24 grid grid-cols-1 gap-y-5">
        <Row gutter={20}>
          <Col span={24} className="h-full w-full">
            <BlockItem>
              <Flex className="h-full w-full " justify="center" align="center">
                <div className="h-fit w-full">
                  <CustomTypographyTitle extraClass="text-center">
                    Industry Experiences
                  </CustomTypographyTitle>
                  <CustomTypographyParagraph extraClass="text-2xl text-center">
                    <span className="!mt-4">eton Corp</span>
                    <br />
                    <span className="!mt-4">Front-end Developer Intern</span>
                    <br />
                    <span className="!mt-4">06/2023 - 10/2023</span>
                  </CustomTypographyParagraph>
                  <CustomTypographyParagraph>
                    <List
                      itemLayout="horizontal"
                      dataSource={dataIndustrySkill}
                      bordered={false}
                      split={false}
                      renderItem={(item, index) => (
                        <List.Item key={index}>
                          <List.Item.Meta
                            avatar={
                              <RiArrowRightDoubleLine className="fill-black dark:fill-white mt-2" />
                            }
                            description={
                              <div className="text-lg text-black dark:text-white">
                                {item.row}
                              </div>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </CustomTypographyParagraph>
                </div>
              </Flex>
            </BlockItem>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={24} className="h-full w-full">
            <BlockItem>
              <Flex className="h-full w-full " justify="center" align="center">
                <div className="h-fit w-full">
                  <CustomTypographyTitle extraClass="text-center">
                    Personal Projects
                  </CustomTypographyTitle>
                  <div className="h-fit w-full grid grid-cols-2 gap-5">
                    {renderPersonalProjects(
                      [MySimpleRadio, MySimpleRadio_2],
                      "https://github.com/holimm/MySimpleRadio",
                      "https://holimm.github.io/MySimpleRadio/",
                      "My Simple Radio 🎶",
                      `MySimpleRadio is a simple music player that streams from Youtube.
                    Whether you are studying, playing games, or just relaxing.
                    MySimpleRadio will deliver the best experience and make sure that
                    you can focus on whatever you are doing.`
                    )}
                    {renderPersonalProjects(
                      [ResumeGenerator, ResumeGenerator_2],
                      "https://github.com/holimm/MyResume",
                      "https://holimm.github.io/MyResume/",
                      "Resume Generator 📰",
                      `MyResume is a simple resume generator that takes your input information and turns it into a resume. The app allows you to download PDF files as well as print out your generated resume.`
                    )}
                    {renderPersonalProjects(
                      [MineInUs],
                      "https://github.com/holimm/MineInUs",
                      "",
                      "MineInUs 💰",
                      `MySimpleRadio is a simple music player that streams from Youtube.
                    Whether you are studying, playing games, or just relaxing.
                    MySimpleRadio will deliver the best experience and make sure that
                    you can focus on whatever you are doing.`
                    )}
                    {renderPersonalProjects(
                      [ClothesEcommerce],
                      "https://github.com/holimm/Ecommerce-Project",
                      "",
                      "Clothes Ecommerce 👚",
                      `Ecommerce Project completed in my 3rd year of university.`
                    )}
                    {renderPersonalProjects(
                      [MyBlog],
                      "https://github.com/holimm/MyBlog",
                      "",
                      "MyBlog 📘",
                      `MyBlog is a simple blog where I can post my daily life stories and my views on life. There were some problems during the deployment process, so a preview isn't available yet.`
                    )}
                  </div>
                </div>
              </Flex>
            </BlockItem>
          </Col>
        </Row>
      </div>
    </PageLayout>
  );
};
