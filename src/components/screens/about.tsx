import {
  Col,
  DatePicker,
  DatePickerProps,
  Flex,
  Image,
  Row,
  Space,
} from "antd";
import "../../css/scrollbar.css";
import AvatarHoLim from "../../assets/img/avatar.jpg";
import {
  AboutSocialMedia,
  BlockItem,
  BlockItemImage,
  CustomTypographyParagraph,
  CustomTypographyTitle,
  PageLayout,
  SkillList,
} from "../common";
import { skillData } from "../../variables/const";
import GitHubCalendar from "react-github-calendar";
import dayjs from "dayjs";
import React_Basic_Certificate from "../../assets/img/certificates/React_Basic_Certificate.png";
import { useState } from "react";
import { RangePickerProps } from "antd/es/date-picker";
import { useLocalization } from "../../hooks/useLocalization";
import { toString } from "lodash";

export const AboutScreen = () => {
  const { translate } = useLocalization();
  const [githubCalendarDate, setGithubCalenderDate] = useState(
    new Date().getFullYear()
  );
  const renderSkillRow = (type: string) => {
    return (
      <div className="mt-8">
        <CustomTypographyParagraph>
          <b>{translate(`About.Skills.${type}`)}</b>
        </CustomTypographyParagraph>
        <SkillList skillData={skillData.filter((item) => item.type === type)} />
      </div>
    );
  };
  const renderCertificate = (certificate: any) => {
    return (
      <Col span={12} xs={{ span: 24 }} md={{ span: 12 }}>
        <Image src={certificate} />
      </Col>
    );
  };
  const onChangeYearPicker: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    setGithubCalenderDate(Number(dateString));
  };
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    const yearStart = dayjs("2021").startOf("year");
    const yearEnd = dayjs().endOf("year");
    return !(yearStart <= current && yearEnd.isAfter(current));
  };

  return (
    <PageLayout>
      <div className="h-full w-[95%] lg:w-[72%] xl:w-[55%] mt-24 grid grid-cols-1 gap-y-5">
        <Row gutter={20}>
          <Col span={24} className="h-full w-full">
            <BlockItem>
              <Flex className="h-full w-full " justify="center" align="center">
                <div className="h-fit w-full">
                  <CustomTypographyTitle>
                    {translate("About.About")}
                  </CustomTypographyTitle>
                  <CustomTypographyParagraph>
                    {translate("About.Content_1")} <br />
                    <br />
                    {translate("About.Content_2")}
                  </CustomTypographyParagraph>
                  <Row className="mt-6" gutter={20}>
                    <AboutSocialMedia />
                  </Row>
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
                  <CustomTypographyTitle>
                    {translate("About.Skills")}
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
              <CustomTypographyTitle>
                {translate("About.Certificates")}
              </CustomTypographyTitle>
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
                <div className="h-fit w-full">
                  <CustomTypographyTitle extraClass="text-center">
                    {translate("About.Github.Contributions")}
                  </CustomTypographyTitle>

                  <div className="w-fit max-w-full mx-auto mt-12 text-black dark:text-white ">
                    <GitHubCalendar
                      username="holimm"
                      year={githubCalendarDate}
                      labels={{
                        totalCount: `{{count}} ${toString(
                          translate("About.Github.Contributions.Label")
                        )} {{year}}`,
                      }}
                    />
                    <Space className="mt-4">
                      <DatePicker
                        onChange={onChangeYearPicker}
                        disabledDate={disabledDate}
                        picker="year"
                        defaultValue={dayjs(dayjs(), "YYYY")}
                      />
                    </Space>
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
