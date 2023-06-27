import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDataStore } from "@/store/useDataStore";
import { BaseSelect } from "../BaseSelect/BaseSelect";
import { getTranslationKeys } from "@/helpers";

const selectStyleConfig = {
  control: {
    minHeight: "auto"
  }
};

const LanguageSelect: FC = () => {
  const { setLanguage } = useDataStore();
  const { i18n, t } = useTranslation();

  const languageKeys = getTranslationKeys("lang");
  const languages = languageKeys.map((languageKey: string) => ({
    label: t(`lang.${languageKey}`),
    value: languageKey
  }));

  const handleChange = (lang: { label: string, value: string }) => {
    const { value } = lang;

    setLanguage(value);
    i18n.changeLanguage(value).then();
  };

  return (
    <>
      <BaseSelect
        defaultValue={i18n.language}
        options={languages}
        styles={selectStyleConfig}
        onChange={handleChange}
      />
    </>
  );
};

export default LanguageSelect;
