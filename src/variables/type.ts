import { IconType } from "react-icons";

export interface TabColorScreenType {
  tabColor: boolean;
}

export interface SkillDataType {
  label: string;
  type: string;
  logoSrc: string;
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
