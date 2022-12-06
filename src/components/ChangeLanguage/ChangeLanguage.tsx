import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useDataStore } from "../../store/useDataStore";

const ChangeLanguage: FC = () => {
  const { t, i18n } = useTranslation();
  const { setLanguage } = useDataStore();
  const activeLangColor = (lang: string) =>
    lang === i18n.language ? "white" : "gray.400";

  const handleClick = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang).then();
  };

  return (
    <Flex gap="8px">
      <Text fontSize="harm.h1" onClick={() => handleClick("ru")} color={activeLangColor("ru")}>
        {t("lang.ru")}
      </Text>
      <Text onClick={() => handleClick("en")} color={activeLangColor("en")}>
        {t("lang.en")}
      </Text>
    </Flex>
  );
};

export default ChangeLanguage;
