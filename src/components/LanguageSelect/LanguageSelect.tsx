import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDataStore } from "@/store/useDataStore";
import { BaseSelect } from "../BaseSelect/BaseSelect";
import { resolveTranslationPath } from "@/helpers";
import { languagesData } from "@/constants";

const selectStyleConfig = {
  control: {
    minHeight: "auto"
  }
};

const LanguageSelect: FC = () => {
  const { setLanguage } = useDataStore();
  const { i18n } = useTranslation();

  const languagesOptions = languagesData.map((languageData) => resolveTranslationPath(languageData));
  const languages = languagesOptions.map(({ languageId, languageName }) => ({
    label: languageName,
    value: languageId
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
