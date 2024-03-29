import { Col, Flex, Row } from "antd";
import "../../css/scrollbar.css";
import {
  BlockItem,
  ContactSocialMedia,
  GradientText,
  NormalTypography,
  PageLayout,
} from "../common";
import contactPerson from "../../assets/json/contact-person.json";
import Lottie from "lottie-react";
import { useLocalization } from "../../hooks/useLocalization";

export const ContactScreen = () => {
  const { translate } = useLocalization();
  return (
    <PageLayout footer={false}>
      <Flex
        className="h-screen w-full pb-10 lg:pb-0"
        justify="center"
        align="center"
      >
        <div className="h-fit w-[95%] lg:w-[72%] xl:w-[55%] grid grid-cols-1 gap-y-5">
          <Row gutter={20}>
            <Col span={24} className="w-full">
              <BlockItem className="!p-0 min-h-[70vh]">
                <div className="h-[70vh] w-full flex justify-end items-end">
                  <div className="h-full w-full p-10 absolute top-0 left-0 z-20">
                    <NormalTypography extraClass="text-3xl font-bold">
                      <GradientText>
                        {translate("Contact.Contact")}
                      </GradientText>
                    </NormalTypography>
                    <NormalTypography extraClass="mt-3">
                      {translate("Contact.Description")}
                    </NormalTypography>
                    <ContactSocialMedia />
                  </div>
                  <Lottie
                    className="h-fit w-full md:w-[90%] lg:w-[80%]"
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
