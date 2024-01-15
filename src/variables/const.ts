import { useLocalization } from "../hooks/useLocalization";
import { SkillDataType } from "./type";

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
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "Next.js",
    type: "Front-end",
    link: "https://nextjs.org/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    label: "Typescript",
    type: "Tools",
    link: "https://www.typescriptlang.org/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    label: "Redux",
    type: "Tools",
    link: "https://redux.js.org/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    label: "TailwindCSS",
    type: "Front-end",
    link: "https://tailwindcss.com/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    label: "Bootstrap",
    type: "Front-end",
    link: "https://getbootstrap.com/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    label: "Ant Design",
    type: "Front-end",
    link: "https://ant.design/",
    logoSrc:
      "https://static-00.iconduck.com/assets.00/ant-design-icon-512x512-xbdsnx83.png",
  },
  {
    label: "Material UI",
    type: "Front-end",
    link: "https://mui.com/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    label: "HTML5",
    type: "Front-end",
    link: "",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    label: "CSS3",
    type: "Front-end",
    link: "",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    label: "Javascript",
    type: "Front-end",
    link: "",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "Javascript",
    type: "Back-end",
    link: "",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "Node.js",
    type: "Back-end",
    link: "https://nodejs.org/en",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    label: "PHP",
    type: "Back-end",
    link: "https://www.php.net/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    label: "Laravel",
    type: "Back-end",
    link: "https://laravel.com/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  },
  {
    label: "MySQL",
    type: "Database",
    link: "https://www.mysql.com/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    label: "MongoDB",
    type: "Database",
    link: "https://www.mongodb.com/",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];
