import { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem, HStack, Text, Icon, useMediaQuery, Flex } from "@chakra-ui/react";
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
      { ({ isOpen }) => {
        const isOpenOnMobile = isOpen && isMobileWidth;

          return (
            <>
              <MenuButton
                zIndex={2}
                h={{
                  base: isOpen ? 14 : "auto",
                  md: "auto"
                }}
                pos={{
                  base: isOpen ? "fixed" : "static",
                  md: "static"
                }}
                top={0}
                left={0}
                pl={{
                  base: isOpen ? 0 : 4,
                  md: 4
                }}
                w={{
                  base: isOpen ? "56px" : "76px",
                  md: "104px"
                }}
              >
                <HStack
                  spacing={{
                    base: isOpenOnMobile ? 0 : 1.5,
                    md: 2
                  }}
                >
                  {
                    isOpenOnMobile
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
                    { !isOpenOnMobile &&i18n.language }
                  </Text>

                    <Icon
                      as={isOpen ? ArrowUpIcon : ArrowDownIcon}
                      width={4}
                      color="initial"
                      display={isOpenOnMobile ? "none" : "block"}
                    />
                </HStack>
              </MenuButton>

              <MenuList
                minW={{
                  base: "100vw",
                  md: 44,
                  lg: 60
                }}
                paddingTop={isOpenOnMobile ? 14 : 0}
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
                top={-16}
                left={0}
              >
                { isOpenOnMobile &&
                  <Flex
                    w="calc(100vw - 56px)"
                    h={14}
                    zIndex={2}
                    pl={2}
                    position="fixed"
                    top={-16}
                    left={14}
                    align="center"
                    fontWeight="bold"
                  >
                    Language
                  </Flex>
                }
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
          );
        }
      }
    </Menu>
  );
};

