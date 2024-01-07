import { Button, Card, Col, Image, Row, Typography } from "antd";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ScreenStyle } from "../variables/const";
import "../css/common.css";
import { isEmpty } from "lodash";
import {
  DataSocialContactType,
  ScreenChangingAnimationType,
} from "../variables/type";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const dataSocialContact: DataSocialContactType[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nguyen-lim-thai-ho/",
    icon: <FaLinkedin size={40} className="fill-black dark:fill-white" />,
    label: "Thái Hồ Nguyễn Lim",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/tea.limho/",
    icon: <FaFacebook size={40} className="fill-black dark:fill-white" />,
    label: "Hồ Lim  (임태호)",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/millohh_/",
    icon: <FaInstagram size={40} className="fill-black dark:fill-white" />,
    label: "millohh_",
  },
  {
    name: "Github",
    url: "https://github.com/holimm",
    icon: <FaGithub size={40} className="fill-black dark:fill-white" />,
    label: "holimm",
  },
  {
    name: "Mail",
    url: "mailto:kahn12345678@gmail.com",
    icon: <IoIosMail size={40} className="fill-black dark:fill-white" />,
    label: "kahn12345678@gmail.com",
  },
];

export const IconButton = ({ icon, url }: { icon: ReactNode; url: string }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Button
        className="hover:scale-110"
        type="text"
        size="large"
        icon={icon}
      ></Button>
    </a>
  );
};

export const IconButtonFooter = ({
  icon,
  url,
}: {
  icon: ReactNode;
  url: string;
}) => {
  return (
    <div
      className={`h-fit w-fit px-2 bg-white/80 dark:bg-neutral-900/80 rounded-lg scale-75`}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <Button
          className="hover:scale-110"
          type="text"
          size="large"
          icon={icon}
        ></Button>
      </a>
    </div>
  );
};

export const RenderTab = ({ children }: { children: ReactNode }) => {
  return <motion.div className="h-screen w-screen">{children}</motion.div>;
};

export const ScreenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-fit w-full">
      <div className="h-fit w-full flex justify-center items-start relative z-10 top-0">
        {children}
      </div>
    </div>
  );
};

export const BlockItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    // <div className="h-full w-full flex justify-center items-center p-2 bg-slate-100/20 backdrop-blur-3xl rounded-xl">
    <div
      className={`h-fit w-full flex justify-center items-center p-2 text-white transition-all bg-slate-100/40 dark:bg-neutral-800/40 backdrop-blur-3xl rounded-xl`}
    >
      <div
        className={`h-full w-full px-4 md:px-6 lg:px-8 py-16 bg-white/80 dark:bg-neutral-900/80 rounded-xl shadow-lg ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export const BlockItemResume = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="h-full w-full flex justify-center items-center p-2 bg-slate-100/20 backdrop-blur-3xl rounded-xl">
    <div
      className={`h-fit w-fit p-2 text-white transition-all bg-slate-100/40 dark:bg-neutral-800/40 backdrop-blur-3xl rounded-xl`}
    >
      <div
        className={`h-fit w-fit p-5 flex justify-center items-center bg-white/80 dark:bg-neutral-900/80 rounded-xl shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export const BlockItemImage = ({ avatar }: { avatar: any }) => {
  return (
    <div
      className={`h-full w-full flex justify-center items-center p-2 bg-slate-100/40 dark:bg-neutral-800/40 backdrop-blur-3xl rounded-xl`}
    >
      <div
        className={`h-full w-full bg-white/80 dark:bg-neutral-900/80 rounded-xl shadow-lg`}
      >
        <div
          className="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    </div>
  );
};

export const BlockItemHeader = ({
  children,
  makeUnder,
  checkTab,
  extraClass,
}: {
  children: ReactNode;
  makeUnder?: boolean;
  checkTab?: any;
  extraClass?: string;
}) => {
  const renderTabCheck = () => {
    if (checkTab === "Resume") return null;
    return (
      <div
        className={`h-14 w-full flex justify-center items-center fixed top-3 ${
          makeUnder ? "z-[40]" : "z-[50]"
        } ${extraClass && extraClass}`}
      >
        <div
          className={`h-full w-fit bg-slate-100/50 dark:bg-neutral-800/50 rounded-full p-1`}
        >
          <div
            className={`h-full w-fit mx-auto px-5 py-2 bg-white/90 dark:bg-neutral-900/90 rounded-full shadow-md`}
          >
            <div className="grid grid-cols-4 gap-10">{children}</div>
          </div>
        </div>
      </div>
    );
  };
  return renderTabCheck();
};

export const BlockItemMenu = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-16 w-16 flex justify-center items-center fixed bottom-10 right-10 lg:bottom-16 lg:right-16 z-50">
      <div
        className={`h-fit w-fit bg-slate-100/50 dark:bg-neutral-800/50 rounded-full p-1`}
      >
        <div
          className={`h-fit w-fit mx-auto p-4 bg-white/90 dark:bg-neutral-900/90 rounded-full shadow-md`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const CustomTypographyParagraph = ({
  children,
  extraClass,
}: {
  children: ReactNode;
  extraClass?: string;
}) => (
  <Typography.Paragraph
    className={`text-lg text-black dark:text-white font-montserrat ${
      !isEmpty(extraClass) && extraClass
    }`}
  >
    {children}
  </Typography.Paragraph>
);

export const CustomTypographyTitle = ({
  children,
  extraClass,
}: {
  children: ReactNode;
  extraClass?: string;
}) => (
  <Typography.Title>
    <p
      className={`text-3xl text-black dark:text-white font-bold font-montserrat ${
        !isEmpty(extraClass) && extraClass
      }`}
    >
      {children}
    </p>
  </Typography.Title>
);

export const NormalTypography = ({
  children,
  extraClass,
}: {
  children: ReactNode;
  extraClass?: string;
}) => (
  <p
    className={`text-lg text-black dark:text-white font-montserrat ${
      !isEmpty(extraClass) && extraClass
    }`}
  >
    {children}
  </p>
);

export const SkillList = ({ skillData }: { skillData: any[] }) => {
  return (
    <div className="h-fit max-h-[37em] overflow-y-auto w-full grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-5">
      {!isEmpty(skillData) &&
        skillData.map((item: any) => (
          <Card
            type="inner"
            bordered={false}
            className="dark:bg-[#0c0a09]"
            cover={
              <div className="dark:bg-neutral-900">
                <Image src={item.logoSrc}></Image>
              </div>
            }
          >
            <div className="h-full w-full">
              <div className="text-lg text-black dark:text-white font-montserrat">
                {item.label}
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export const AboutSocialMedia = () => {
  return (
    <>
      {dataSocialContact.map((item, index) => (
        <Col>
          <IconButton key={index} icon={item.icon} url={item.url}></IconButton>
        </Col>
      ))}
    </>
  );
};

export const ContactSocialMedia = () => {
  return (
    <div className="mt-10">
      {dataSocialContact.map((item, index) => (
        <div className="w-fit mt-5 flex justify-start items-center hover:scale-105 transition-all">
          <a
            className="w-fit"
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-fit w-fit">{item.icon}</div>
          </a>
          <a
            className="w-fit"
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-fit w-fit ml-4">
              <NormalTypography>{item.label}</NormalTypography>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export const ScreenFooter = () => {
  return (
    <div className="h-fit w-full pb-24 md:pb-16 lg:pb-0">
      <div className="h-fit w-full flex justify-center mt-14">
        <div className="h-fit w-fit">
          <Row className="mx-auto mt-3" gutter={8}>
            {dataSocialContact.map((item, index) => (
              <Col>
                <IconButtonFooter
                  key={index}
                  icon={item.icon}
                  url={item.url}
                ></IconButtonFooter>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Typography.Paragraph className="text-xl text-white dark:text-neutral-300 text-center mt-4 pb-10">
        © 2023 | Nguyen Lim Thai Ho
      </Typography.Paragraph>
    </div>
  );
};

export const PageLayout = ({
  children,
  footer = true,
}: {
  children: ReactNode;
  footer?: boolean;
}) => {
  return (
    <div className={`${ScreenStyle}`}>
      <div className="h-fit w-full max-h-screen overflow-y-auto overflow-x-hidden">
        <ScreenLayout>{children}</ScreenLayout>
        {footer && <ScreenFooter />}
      </div>
    </div>
  );
};

export const ChangingScreenAnimation = ({
  screenChanging,
  initial,
  animate,
  transition,
  zIndex,
  color,
  onAnimationComplete,
}: ScreenChangingAnimationType) => {
  return (
    <>
      {screenChanging && (
        <>
          <motion.div
            className={`h-screen w-screen ${color} overflow-hidden absolute top-0 ${zIndex}`}
            initial={initial}
            animate={animate}
            transition={transition}
            onAnimationComplete={onAnimationComplete}
          ></motion.div>
        </>
      )}
    </>
  );
};
