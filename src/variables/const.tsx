import { useLocalization } from "../hooks/useLocalization";
import { SkillDataType } from "./type";
import ReactIcon from "../assets/img/icons/ReactIcon.svg";
import NextJSIcon from "../assets/img/icons/NextJSIcon.svg";
import TypescriptIcon from "../assets/img/icons/TypescriptIcon.svg";
import ReduxIcon from "../assets/img/icons/ReduxIcon.svg";
import TailwindIcon from "../assets/img/icons/TailwindIcon.svg";
import BootstrapIcon from "../assets/img/icons/BootstrapIcon.svg";
import AntDesignIcon from "../assets/img/icons/AntDesignIcon.png";
import MaterialUIIcon from "../assets/img/icons/MaterialUIIcon.svg";
import HTML5Icon from "../assets/img/icons/HTML5Icon.svg";
import CSS3Icon from "../assets/img/icons/CSS3Icon.svg";
import JavascriptIcon from "../assets/img/icons/JavascriptIcon.svg";
import NodeJSIcon from "../assets/img/icons/NodeJSIcon.svg";
import PHPIcon from "../assets/img/icons/PHPIcon.svg";
import LaravelIcon from "../assets/img/icons/LaravelIcon.svg";
import MySQLIcon from "../assets/img/icons/MySQLIcon.svg";
import MongoDBIcon from "../assets/img/icons/MongoDBIcon.svg";

import { Image } from "antd";

export const ScreenStyle = "h-full w-full";

export const themeTextColor = "blue-500";

export const urlHost = "/MyPortfolio";

export const getTabColor = (bool: boolean) => {
  return bool ? "bg-sky-100" : "bg-sky-200";
};

export const TopNavData = () => {
  const { translate } = useLocalization();
  return [
    {
      id: 0,
      label: translate("Nav.Home"),
      tab: "Home",
    },
    {
      id: 1,
      label: translate("Nav.About"),
      tab: "About",
    },
    {
      id: 2,
      label: translate("Nav.Projects"),
      tab: "Projects",
    },
    {
      id: 3,
      label: translate("Nav.Contact"),
      tab: "Contact",
    },
  ];
};

export const skillData: SkillDataType[] = [
  {
    label: "React.js",
    type: "Front-end",
    link: "https://react.dev/",
    logoSrc: <Image src={ReactIcon} preview={false} />,
  },
  {
    label: "Next.js",
    type: "Front-end",
    link: "https://nextjs.org/",
    logoSrc: <Image src={NextJSIcon} preview={false} />,
  },
  {
    label: "Typescript",
    type: "Tools",
    link: "https://www.typescriptlang.org/",
    logoSrc: <Image src={TypescriptIcon} preview={false} />,
  },
  {
    label: "Redux",
    type: "Tools",
    link: "https://redux.js.org/",
    logoSrc: <Image src={ReduxIcon} preview={false} />,
  },
  {
    label: "TailwindCSS",
    type: "Front-end",
    link: "https://tailwindcss.com/",
    logoSrc: <Image src={TailwindIcon} preview={false} />,
  },
  {
    label: "Bootstrap",
    type: "Front-end",
    link: "https://getbootstrap.com/",
    logoSrc: <Image src={BootstrapIcon} preview={false} />,
  },
  {
    label: "Ant Design",
    type: "Front-end",
    link: "https://ant.design/",
    logoSrc: <Image src={AntDesignIcon} preview={false} />,
  },
  {
    label: "Material UI",
    type: "Front-end",
    link: "https://mui.com/",
    logoSrc: <Image src={MaterialUIIcon} preview={false} />,
  },
  {
    label: "HTML5",
    type: "Front-end",
    link: "",
    logoSrc: <Image src={HTML5Icon} preview={false} />,
  },
  {
    label: "CSS3",
    type: "Front-end",
    link: "",
    logoSrc: <Image src={CSS3Icon} preview={false} />,
  },
  {
    label: "Javascript",
    type: "Front-end",
    link: "",
    logoSrc: <Image src={JavascriptIcon} preview={false} />,
  },
  {
    label: "Javascript",
    type: "Back-end",
    link: "",
    logoSrc: <Image src={JavascriptIcon} preview={false} />,
  },
  {
    label: "Node.js",
    type: "Back-end",
    link: "https://nodejs.org/en",
    logoSrc: <Image src={NodeJSIcon} preview={false} />,
  },
  {
    label: "PHP",
    type: "Back-end",
    link: "https://www.php.net/",
    logoSrc: <Image src={PHPIcon} preview={false} />,
  },
  {
    label: "Laravel",
    type: "Back-end",
    link: "https://laravel.com/",
    logoSrc: <Image src={LaravelIcon} preview={false} />,
  },
  {
    label: "MySQL",
    type: "Database",
    link: "https://www.mysql.com/",
    logoSrc: <Image src={MySQLIcon} preview={false} />,
  },
  {
    label: "MongoDB",
    type: "Database",
    link: "https://www.mongodb.com/",
    logoSrc: <Image src={MongoDBIcon} preview={false} />,
  },
];
