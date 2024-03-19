import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface TabColorScreenType {
  tabColor: boolean;
}

export interface SkillDataType {
  label: string;
  type: string;
  link: string;
  logoSrc: ReactNode;
}
export interface ScreenChangingAnimationType {
  screenChanging: boolean;
  initial: any;
  animate: any;
  transition: any;
  zIndex: string;
  color: string;
  onAnimationComplete?: any;
}

export interface DataSocialContactType {
  name: string;
  url: string;
  icon: any;
  label: string;
}

export interface TopNavDataType {
  label: string;
  tab: string;
}
