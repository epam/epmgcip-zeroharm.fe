import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDataStore } from "@/store/useDataStore";
import { Select as ChakraSelect } from "@chakra-ui/react";
import { useTranslationValues } from "@/hooks/useTranslationValues";

const ChangeLanguage: FC = () => {
  const { i18n } = useTranslation();
  const { setLanguage } = useDataStore();

  const handleChange = (lang: string) => {
    setLanguage(lang.toLowerCase());
    i18n.changeLanguage(lang).then();
  };

  const languages = useTranslationValues("lang");

  return (
    <ChakraSelect
      size="xs"
      onChange={(e) => handleChange(e.target.value)}
      focusBorderColor="white"
    >
      {languages?.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </ChakraSelect>
  );
};

export default ChangeLanguage;
