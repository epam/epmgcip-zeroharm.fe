import { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem, HStack, Text, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { useDataStore } from "@/store/useDataStore";
import { resolveTranslationPath } from "@/helpers";
import { languagesData } from "@/constants";
import { ReactComponent as ArrowDownIcon } from "@/assets/icons/stroke/harm-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@/assets/icons/stroke/harm-arrow-up.svg";
// import { ReactComponent as LeftArrowIcon } from "@/assets/icons/stroke/harm-arrow-left.svg";
import { ReactComponent as RuFlagIcon } from "@/assets/icons/flags/harm-lang-flag-russia.svg";
import { ReactComponent as EnFlagIcon } from "@/assets/icons/flags/harm-lang-flag-united-states.svg";
import { ReactComponent as UzFlagIcon } from "@/assets/icons/flags/harm-lang-flag-uzbekistan.svg";

const LanguageFlags: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  en: EnFlagIcon,
  ru: RuFlagIcon,
  uz: UzFlagIcon
};

const LanguageMenu: FC = () => {
  const { setLanguage } = useDataStore();
  const { i18n } = useTranslation();
  const languagesOptions = languagesData.map((languageData) => resolveTranslationPath(languageData));
  const CurrentLanguageIcon = LanguageFlags[i18n.language];

  return (
    <Menu autoSelect={false} variant="language">
      { ({isOpen}) => (
        <>
          <MenuButton>
            <HStack spacing={{ base: 1.5, md: 2 }}>
              <CurrentLanguageIcon />

              <Text
                display={{ base: "none", md: "block" }}
                color="initial"
              >
                { i18n.language }
              </Text>

              <Icon
                as={isOpen ? ArrowUpIcon : ArrowDownIcon}
                width={4}
                color="initial"
              />
            </HStack>
          </MenuButton>

          <MenuList>
            {
              languagesOptions.map(({ languageId, languageName}) => {
                const LanguageIcon = LanguageFlags[languageId];

                return (
                  <MenuItem
                    key={languageId}
                    onClick={() => setLanguage(languageId)}
                    aria-selected={languageId === i18n.language}
                  >
                    <LanguageIcon />

                    { languageName }
                  </MenuItem>
                );
              })
            }
          </MenuList>
        </>
      ) }
    </Menu>
  );
};

export default LanguageMenu;
