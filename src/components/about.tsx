import { Col, Divider, Image, List, Row, Typography } from "antd";
import "../css/scrollbar.css";
import { ScreenStyle } from "../variables/const";
import AvatarImage from "../assets/img/avatar.jpg";
import Particle from "../particles/particles";
import { useCallback } from "react";

const TabClass = "h-fit w-full bg-white rounded-xl";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

export const AboutScreen = () => {
  return (
    <div className={`${ScreenStyle} bg-neutral-900 text-white`}>
      <div className="h-full w-full absolute top-0 z-10">
        <div className="h-12 w-full"></div>
        <div className="p-20">
          <Row gutter={20}>
            <Col span={8}>
              <div className={`${TabClass} px-2 py-8`}>
                <div className="h-full w-full flex justify-center items-center ">
                  <Image
                    className="rounded-xl shadow-sm"
                    width={"50%"}
                    src={AvatarImage}
                  />
                </div>
                <div className="h-fit w-full">
                  <Typography.Title className="text-center mt-5" level={3}>
                    Nguyen Lim Thai Ho
                  </Typography.Title>
                  <Divider />
                  <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={"Test"}
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </div>
            </Col>
            <Col span={16}>
              <div className={`${TabClass} p-8`}>
                <Typography.Title level={3}>About me</Typography.Title>
                <Typography.Text>
                  I'm a Software Engineering undergraduate at Saigon University.
                  I'm pursuing a career as a front-end web developer. To
                  understand more about ReactJS and NodeJS, I'm currently
                  working on several projects to improve my skills, this is one
                  of them. You can see some of my work in this portfolio. Thank
                  you for visiting.
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
