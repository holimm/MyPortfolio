import { Button } from "antd";
import { motion } from "framer-motion";
import { ReactNode } from "react";

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

export const RenderAnimateTab = ({
  handleChangeCurrentScreen,
  children,
}: {
  handleChangeCurrentScreen: any;
  children: ReactNode;
}) => {
  return (
    <motion.div
      className="h-screen w-screen absolute top-0 z-10"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => {
        handleChangeCurrentScreen();
      }}
    >
      {children}
    </motion.div>
  );
};

export const RenderAnimateTab2 = ({
  handleChangeCurrentScreen,
  children,
}: {
  handleChangeCurrentScreen: any;
  children: ReactNode;
}) => {
  return (
    <motion.div
      className="h-screen w-screen absolute top-0 z-10"
      initial={{ y: 0 }}
      animate={{ y: "-100vh" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => {
        handleChangeCurrentScreen();
      }}
    >
      {children}
    </motion.div>
  );
};
