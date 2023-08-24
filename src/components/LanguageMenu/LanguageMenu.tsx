import { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem, HStack, Text, Icon, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { useDataStore } from "@/store/useDataStore";
import { resolveTranslationPath } from "@/helpers";
import { languagesData } from "@/constants";
import { ReactComponent as ArrowDownIcon } from "@/assets/icons/stroke/harm-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@/assets/icons/stroke/harm-arrow-up.svg";
import { ReactComponent as LeftArrowIcon } from "@/assets/icons/stroke/harm-arrow-left.svg";
import { ReactComponent as RuFlagIcon } from "@/assets/icons/flags/harm-lang-flag-russia.svg";
import { ReactComponent as EnFlagIcon } from "@/assets/icons/flags/harm-lang-flag-united-states.svg";
import { ReactComponent as UzFlagIcon } from "@/assets/icons/flags/harm-lang-flag-uzbekistan.svg";

const LanguageFlags: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  en: EnFlagIcon,
  ru: RuFlagIcon,
  uz: UzFlagIcon
};

export const LanguageMenu: FC = () => {
  const { setLanguage } = useDataStore();

  const { i18n } = useTranslation();

  const [isMobileWidth] = useMediaQuery("(max-width: 767px)");

  const languagesOptions = languagesData.map((languageData) => resolveTranslationPath(languageData));

  const CurrentLanguageIcon = LanguageFlags[i18n.language];

  return (
    <Menu autoSelect={false}>
      { ({isOpen}) => (
        <>
          <MenuButton
            pos={{
              base: isOpen ? "fixed" : "static",
              md: "static"
            }}
            top={{
              base: isOpen ? 0 : 0
            }}
            left={{
              base: isOpen ? 0 : 0
            }}
            pl={{
              base: isOpen ? 0 : 4,
              md: 4
            }}
            w={{
              base: isOpen ? "100vw" : "76px",
              md: "104px"
            }}
          >
            <HStack
              spacing={{
                base: 1.5,
                md: 2
              }}
            >
              {
                isOpen && isMobileWidth
                  ? <HStack w={14} justify="center">
                      <LeftArrowIcon width={20} color="initial" />
                    </HStack>
                  : <CurrentLanguageIcon />
              }

              <Text
                display={{
                  base: isOpen ? "block" : "none",
                  md: "block"
                }}
                color="initial"
              >
                { isOpen && isMobileWidth ? "Language" : i18n.language }
              </Text>

                <Icon
                  as={isOpen ? ArrowUpIcon : ArrowDownIcon}
                  width={4}
                  color="initial"
                  display={{
                    base: isOpen && isMobileWidth ? "none" : "block",
                    md: "block"
                  }}
                />
            </HStack>
          </MenuButton>

          <MenuList
            minW={{
              base: "100vw",
              md: "44",
              lg: "60"
            }}
            minH={{
              base: isOpen ? "100vh" : 0,
              md: 0
            }}
            borderRadius={{
              base: 0,
              md: 8
            }}
            position={{
              base: isOpen ? "relative" : "static",
              md: "static"
            }}
            top={{
              base: isOpen ? "-8px" : 0,
              md: 0
            }}
          >
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

