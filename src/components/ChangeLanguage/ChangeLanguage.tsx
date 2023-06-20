import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDataStore } from "@/store/useDataStore";
import { Select as ChakraSelect } from "@chakra-ui/react";
import { useTranslationKeys } from "@/hooks/useTranslationKeys";

const ChangeLanguage: FC = () => {
  const { i18n } = useTranslation();
  const { setLanguage } = useDataStore();

  const handleChange = (lang: string) => {
    setLanguage(lang.toLowerCase());
    i18n.changeLanguage(lang).then();
  };

  const languages = useTranslationKeys("lang");

  return (
    <>
      <ChakraSelect
        size="xs"
        onChange={(e) => handleChange(e.target.value)}
        focusBorderColor="white"
        textTransform={"uppercase"}
        defaultValue={i18n.language}
      >
        {languages?.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </ChakraSelect>
    </>
  );
};

export default ChangeLanguage;
