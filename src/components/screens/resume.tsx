import { useMemo } from "react";
import MyCV from "../../assets/resume/CV.png";
import MyCV_EN from "../../assets/resume/CV_EN.png";
import { BlockItemHeader, BlockItemResume, PageLayout } from "../common";
import { Button, Flex, Image } from "antd";
import { useLocalization } from "../../hooks/useLocalization";
import { TopNavData } from "../../variables/const";
import { useOutletContext } from "react-router-dom";
import { TopNavDataType } from "../../variables/type";

export const ResumeScreen = () => {
  const { language } = useLocalization();
  const topNavData = TopNavData();
  const handleChangeTab: Function = useOutletContext();

  const resume = useMemo(() => {
    if (language === "vi") return MyCV;
    if (language === "en") return MyCV_EN;
  }, [language]);

  const renderTopNav = (item: TopNavDataType, index: number) => {
    return (
      <Button
        className={`font-montserrat text-black dark:text-white `}
        type="text"
        onClick={() => handleChangeTab(item.tab)}
        block
      >
        {item.label}
      </Button>
    );
  };

  return (
    <PageLayout footer={false}>
      <div className="h-fit w-[95%] lg:w-[72%] xl:w-[55%]">
        <Flex className="h-screen w-full" justify="center" align="center">
          <div className="hidden lg:block">
            <div className={`h-fit w-fit flex justify-center items-center`}>
              <div
                className={`h-full w-fit bg-slate-100/50 dark:bg-neutral-800/50 rounded-lg p-1`}
              >
                <div
                  className={`h-full w-fit mx-auto px-2 py-2 bg-white/90 dark:bg-neutral-900/90 rounded-lg shadow-md`}
                >
                  <div className="grid grid-cols-1 gap-10 py-5">
                    {topNavData.map((item, index) => (
                      <>{renderTopNav(item, index)}</>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlockItemHeader extraClass="lg:hidden block">
            {topNavData.map((item, index) => (
              <>{renderTopNav(item, index)}</>
            ))}
          </BlockItemHeader>
          <BlockItemResume>
            <Image className="h-full w-full max-h-[95vh]" src={resume} />
          </BlockItemResume>
        </Flex>
      </div>
    </PageLayout>
  );
};
