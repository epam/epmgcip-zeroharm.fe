import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDataStore } from "@/store/useDataStore";
import { BaseSelect } from "../BaseSelect/BaseSelect";
import { useTranslationKeys } from "@/hooks/useTranslationKeys";

const selectStyleConfig = {
  control: {
    minHeight: 'auto'
  }
}

const ChangeLanguage: FC = () => {
  const { i18n } = useTranslation();
  const { setLanguage } = useDataStore();

  const handleChange = (lang: { label: string, value: string }) => {
    const { value } = lang;

    setLanguage(value.toLowerCase());
    i18n.changeLanguage(value).then();
  };

  const languages = useTranslationKeys("lang");

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

export default ChangeLanguage;
