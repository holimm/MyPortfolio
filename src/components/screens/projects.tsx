import { Card, Carousel, Col, Flex, Image, List, Row, Typography } from "antd";
import "../../css/scrollbar.css";
import {
  BlockItem,
  CustomTypographyParagraph,
  CustomTypographyTitle,
  PageLayout,
} from "../common";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import MySimpleRadio from "../../assets/img/projects/MySimpleRadio/MySimpleRadio.png";
import MySimpleRadio_2 from "../../assets/img/projects/MySimpleRadio/MySimpleRadio_2.png";
import MineInUs from "../../assets/img/projects/MineInUs/MineInUs.png";
import ClothesEcommerce from "../../assets/img/projects/ClothesEcommerce/ClothesEcommerce.png";
import ResumeGenerator from "../../assets/img/projects/ResumeGenerator/ResumeGenerator.png";
import ResumeGenerator_2 from "../../assets/img/projects/ResumeGenerator/ResumeGenerator_2.png";
import MyBlog from "../../assets/img/projects/MyBlog/MyBlog.png";
import { isEmpty } from "lodash";
import { useLocalization } from "../../hooks/useLocalization";

export const ProjectScreen = () => {
  const { translate } = useLocalization();
  const dataIndustrySkill = [
    {
      row: translate("Projects.Company_1.Content.1"),
    },
    {
      row: translate("Projects.Company_1.Content.2"),
    },
    {
      row: translate("Projects.Company_1.Content.3"),
    },
    {
      row: translate("Projects.Company_1.Content.4"),
    },
  ];
  const renderPersonalProjects = (
    images: any[],
    url: string,
    preview: string,
    title: any,
    desc: any
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
            <a href={url} target="_blank" rel="noreferrer">
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
                <a href={preview} target="_blank" rel="noreferrer">
                  <h1 className="w-fit text-lg -mt-2 text-fuchsia-800 dark:text-fuchsia-500 font-montserrat hover:!text-fuchsia-500 dark:hover:!text-fuchsia-800 transition-all">
                    <span>{translate("Projects.Preview")}</span>
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
      <div className="h-full w-[95%] lg:w-[72%] xl:w-[55%] mt-24 grid grid-cols-1 gap-y-5">
        <Row gutter={20}>
          <Col span={24} className="h-full w-full">
            <BlockItem>
              <Flex className="h-full w-full " justify="center" align="center">
                <div className="h-fit w-full">
                  <CustomTypographyTitle extraClass="text-center">
                    {translate("Projects.IndustryExp")}
                  </CustomTypographyTitle>
                  <CustomTypographyParagraph extraClass="text-2xl text-center">
                    <span className="!mt-4">
                      {translate("Projects.Company_1")}
                    </span>
                    <br />
                    <span className="!mt-4">
                      {translate("Projects.Company_1.Position")}
                    </span>
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
                    {translate("Projects.Personal")}
                  </CustomTypographyTitle>
                  <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    {renderPersonalProjects(
                      [MySimpleRadio, MySimpleRadio_2],
                      "https://github.com/holimm/MySimpleRadio",
                      "https://holimm.github.io/MySimpleRadio/",
                      translate("Projects.MySimpleRadio"),
                      translate("Projects.MySimpleRadio.Content")
                    )}
                    {renderPersonalProjects(
                      [ResumeGenerator, ResumeGenerator_2],
                      "https://github.com/holimm/MyResume",
                      "https://holimm.github.io/MyResume/",
                      translate("Projects.ResumeGenerator"),
                      translate("Projects.ResumeGenerator.Content")
                    )}
                    {renderPersonalProjects(
                      [MineInUs],
                      "https://github.com/holimm/MineInUs",
                      "",
                      translate("Projects.MineInUs"),
                      translate("Projects.MineInUs.Content")
                    )}
                    {renderPersonalProjects(
                      [ClothesEcommerce],
                      "https://github.com/holimm/Ecommerce-Project",
                      "",
                      translate("Projects.ClothesEcommerce"),
                      translate("Projects.ClothesEcommerce.Content")
                    )}
                    {renderPersonalProjects(
                      [MyBlog],
                      "https://github.com/holimm/MyBlog",
                      "",
                      translate("Projects.MyBlog"),
                      translate("Projects.MyBlog.Content")
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
