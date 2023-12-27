import { Button, Card, Image, Typography } from "antd";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ScreenStyle, themeTextColor } from "../variables/const";
import "../css/common.css";
import { isEmpty } from "lodash";

interface IconButtonType {
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}

export const IconButton = ({ icon }: IconButtonType) => {
  return <Button type="text" size="large" icon={icon}></Button>;
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
    <div className="h-full w-full flex justify-center items-center p-2 bg-slate-100/20 backdrop-blur-3xl rounded-xl">
      <div className="h-full w-full px-8 py-16 bg-white rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  );
};

export const BlockItemImage = ({ avatar }: { avatar: any }) => {
  return (
    <div className="h-full w-full flex justify-center items-center p-2 bg-slate-100/20 backdrop-blur-3xl rounded-xl">
      <div className="h-full w-full bg-white rounded-xl shadow-lg">
        <div
          className="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
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
    className={`text-lg ${!isEmpty(extraClass) && extraClass}`}
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
      className={`text-3xl text-${themeTextColor} font-bold ${
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
          <Card cover={<Image src={item.logoSrc}></Image>}>
            <Card.Meta title={item.label} />
          </Card>
        ))}
    </div>
  );
};

export const ScreenFooter = () => {
  return (
    <CustomTypographyParagraph extraClass="text-center pb-10">
      © 2023 | Nguyen Lim Thai Ho
    </CustomTypographyParagraph>
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
