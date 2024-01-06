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
import { useLocalization } from "../../hooks/useLocalization";

export const ContactScreen = () => {
  const { translate } = useLocalization();
  return (
    <PageLayout footer={false}>
      <Flex className="h-screen w-full" justify="center" align="center">
        <div className="h-fit w-[55%] grid grid-cols-1 gap-y-5">
          <Row gutter={20}>
            <Col span={24} className="w-full">
              <BlockItem className="!p-0">
                <div className="h-full w-full flex justify-end items-end">
                  <div className="h-full w-full p-10 absolute top-0 left-0 z-20">
                    <NormalTypography extraClass="text-3xl font-bold">
                      {translate("Contact.Contact")}
                    </NormalTypography>
                    <NormalTypography extraClass="mt-3">
                      {translate("Contact.Description")}
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
      </Flex>
    </PageLayout>
  );
};
