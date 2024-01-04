import { Button, Card, Flex, Image, Space, Typography } from "antd";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import {
  ScreenStyle,
  darkModeColor,
  darkModeColorSub,
  lightModeColor,
  lightModeColorSub,
  themeTextColor,
} from "../variables/const";
import "../css/common.css";
import { isEmpty } from "lodash";
import { ScreenChangingAnimationType } from "../variables/type";
import { Document, Page } from "react-pdf";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

interface IconButtonType {
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}

export const IconButton = ({ icon, url }: { icon: ReactNode; url: string }) => {
  return (
    <a href={url} target="_blank">
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
      className={`h-fit w-fit ${lightModeColor} dark:${darkModeColor} rounded-lg`}
    >
      <a href={url} target="_blank">
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
    <div className="h-fit min-h-screen w-full">
      <div className="h-fit min-h-screen w-full flex justify-center items-start relative z-10 top-0">
        {children}
      </div>
    </div>
  );
};

export const BlockItem = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="h-full w-full flex justify-center items-center p-2 bg-slate-100/20 backdrop-blur-3xl rounded-xl">
    <div
      className={`h-full w-full flex justify-center items-center p-2 text-white transition-all ${lightModeColorSub} dark:${darkModeColorSub} backdrop-blur-3xl rounded-xl`}
    >
      <div
        className={`h-full w-full px-8 py-16 ${lightModeColor} dark:${darkModeColor} rounded-xl shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export const BlockItemPDF = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="h-full w-full flex justify-center items-center p-2 bg-slate-100/20 backdrop-blur-3xl rounded-xl">
    <div
      className={`h-full w-full p-2 text-white transition-all ${lightModeColorSub} dark:${darkModeColorSub} backdrop-blur-3xl rounded-xl`}
    >
      <div
        className={`h-full w-full px-8 py-16 ${lightModeColor} dark:${darkModeColor} rounded-xl shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export const BlockItemImage = ({ avatar }: { avatar: any }) => {
  return (
    <div
      className={`h-full w-full flex justify-center items-center p-2 ${lightModeColorSub} dark:${darkModeColorSub} backdrop-blur-3xl rounded-xl`}
    >
      <div
        className={`h-full w-full ${lightModeColor} dark:${darkModeColor} rounded-xl shadow-lg`}
      >
        <div
          className="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    </div>
  );
};

export const BlockItemHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-14 w-full flex justify-center items-center fixed top-3 z-50">
      <div
        className={`h-full w-fit ${lightModeColorSub} dark:${darkModeColorSub} rounded-full p-1`}
      >
        <div
          className={`h-full w-fit  mx-auto px-5 py-2 ${lightModeColor} dark:${darkModeColor} dark:b rounded-full shadow-md`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const RenderPDFItem = ({
  children,
  pdfFile,
}: {
  children: any;
  pdfFile: any;
}) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <Document
      className={"h-fit w-fit"}
      file={pdfFile}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={console.error}
    >
      {children(pageNumber)}
    </Document>
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

export const SkillList = ({ skillData }: { skillData: any[] }) => {
  return (
    <div className="h-fit max-h-[37em] overflow-y-auto w-full grid grid-cols-5 gap-5">
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

export const ScreenFooter = () => {
  return (
    <>
      <div className="h-fit w-full flex justify-center">
        <div className="h-fit w-fit">
          <Space className="mx-auto mt-3" direction="horizontal" size="large">
            <IconButtonFooter
              icon={
                <FaLinkedin size={28} className="fill-black dark:fill-white" />
              }
              url="https://www.linkedin.com/in/nguyen-lim-thai-ho/"
            ></IconButtonFooter>
            <IconButtonFooter
              icon={
                <FaFacebook size={28} className="fill-black dark:fill-white" />
              }
              url="https://www.facebook.com/tea.limho/"
            ></IconButtonFooter>
            <IconButtonFooter
              icon={
                <FaInstagram size={28} className="fill-black dark:fill-white" />
              }
              url="https://www.instagram.com/millohh_/"
            ></IconButtonFooter>
            <IconButtonFooter
              icon={
                <FaGithub size={28} className="fill-black dark:fill-white" />
              }
              url="https://github.com/holimm"
            ></IconButtonFooter>
            <IconButtonFooter
              icon={
                <IoIosMail size={28} className="fill-black dark:fill-white" />
              }
              url="mailto:kahn12345678@gmail.com"
            ></IconButtonFooter>
          </Space>
        </div>
      </div>
      <Typography.Paragraph className="text-xl text-white dark:text-neutral-300 text-center mt-4 pb-10">
        © 2023 | Nguyen Lim Thai Ho
      </Typography.Paragraph>
    </>
  );
};

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${ScreenStyle}`}>
      <div className="h-fit w-full max-h-screen overflow-y-auto overflow-x-hidden">
        <ScreenLayout>{children}</ScreenLayout>
        <ScreenFooter />
      </div>
    </div>
  );
};

export const PageNoFooterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${ScreenStyle}`}>
      <div className="h-fit w-full max-h-screen overflow-y-auto overflow-x-hidden">
        <ScreenLayout>{children}</ScreenLayout>
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
