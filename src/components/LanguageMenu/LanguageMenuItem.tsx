import { FC } from "react";
import { MenuItem } from "@chakra-ui/react";
import { Icon } from "@UI";

type LanguageMenuItemProps = {
  languageOption: any;
  currentLanguage: any;
  onClick: (languageId: any) => Promise<void>;
}

export const LanguageMenuItem: FC<LanguageMenuItemProps> =
({
  languageOption: { languageId, languageIconName, languageName},
  currentLanguage,
  onClick
}) => (
  <MenuItem
    onClick={onClick}
    aria-selected={languageId === currentLanguage}
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
