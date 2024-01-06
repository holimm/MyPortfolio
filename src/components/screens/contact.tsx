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
  ContactSocialMedia,
  CustomTypographyParagraph,
  CustomTypographyTitle,
  IconButton,
  NormalTypography,
  PageLayout,
  RenderPDFItem,
  SkillList,
} from "../common";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import contactPerson from "../../assets/json/contact-person.json";
import Lottie from "lottie-react";

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

export const ContactScreen = () => {
  return (
    <PageLayout footer={false}>
      <div className="h-full w-[55%] mt-24 grid grid-cols-1 gap-y-5">
        <Row gutter={20}>
          <Col span={24} className="w-full">
            <BlockItem className="!p-0">
              <div className="h-full w-full flex justify-end items-end">
                <div className="h-full w-full p-10 absolute top-0 left-0">
                  <NormalTypography extraClass="text-3xl font-bold">
                    Contact Info
                  </NormalTypography>
                  <NormalTypography extraClass="mt-3">
                    Feel free to get in touch with me via any of the platforms
                    below.
                  </NormalTypography>
                  <ContactSocialMedia />
                </div>
                <Lottie
                  className="h-fit w-[80%]"
                  animationData={contactPerson}
                />
              </div>
            </BlockItem>
          </Col>
        </Row>
      </div>
    </PageLayout>
  );
};
