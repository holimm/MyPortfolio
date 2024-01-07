import { toString } from "lodash";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const useLocalization = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const changeLanguage = useCallback((value: string) => {
    i18n.changeLanguage(value);
  }, []);

  const translate = useCallback(
    (text: string, args?: any) => {
      let result = t(text, args);
      return toString(result);
    },
    [language]
  );

  return { language, changeLanguage, translate };
};
