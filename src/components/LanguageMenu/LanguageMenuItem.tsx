import { FC } from "react";
import { MenuItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Icon } from "@UI";
import { useDataStore } from "@Store/useDataStore";

type LanguageMenuItemProps = {
  languageOption: any;
}

export const LanguageMenuItem: FC<LanguageMenuItemProps> = ({ languageOption: { languageId, languageIconName, languageName} }) => {
  const { setLanguage } = useDataStore();
  const { i18n } = useTranslation();

  const handleClick = () => i18n.changeLanguage(languageId).then(() => setLanguage(languageId));

  return (
      <MenuItem
        onClick={handleClick}
        aria-selected={languageId === i18n.language}
        h="48px"
        gap="12px"
      >
        <Icon
          type="flags"
          name={languageIconName}
          color="none"
        />

        { languageName }
      </MenuItem>
  );
};

