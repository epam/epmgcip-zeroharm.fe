import { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem, HStack, Text, Icon as ChakraIcon, useMediaQuery, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useDataStore } from "@Store/useDataStore";
import { Icon } from "@UI";
import { resolveTranslationPath } from "@Helpers";
import { languagesData } from "@Constants";
import { ReactComponent as ArrowDownIcon } from "@Assets/icons/stroke/harm-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@Assets/icons/stroke/harm-arrow-up.svg";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";

export const LanguageMenu: FC = () => {
  const { setLanguage } = useDataStore();

  const { i18n, t } = useTranslation();

  const [isMobileWidth] = useMediaQuery("(max-width: 767px)");

  const languagesOptions = languagesData.map((languageData) => resolveTranslationPath(languageData));

  return (
    <Menu autoSelect={false}>
      { ({ isOpen }) => {
        const isOpenOnMobile = isOpen && isMobileWidth;

        return (
          <>
            <MenuButton
              zIndex={2}
              h={{
                base: isOpen ? 14 : "initial",
                md: "initial"
              }}
              pos={{
                base: isOpen ? "fixed" : "initial",
                md: "initial"
              }}
              top={0}
              left={0}
              pl={{
                base: isOpen ? 0 : 3,
                md: 3
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
                        <LeftArrowIcon width={20} />
                      </HStack>
                    : <Icon
                        type="flags"
                        color="none"
                        name={`harm-lang-flag-${i18n.language}`}
                      />
                }

                <Text
                  display={{
                    base: isOpen ? "initial" : "none",
                    md: "initial"
                  }}
                >
                  { !isOpenOnMobile && t("lang.code") }
                </Text>

                  <ChakraIcon
                    as={isOpen ? ArrowUpIcon : ArrowDownIcon}
                    width={4}
                    display={isOpenOnMobile ? "none" : "initial"}
                  />
              </HStack>
            </MenuButton>

            <MenuList
              minW={{
                base: "100vw",
                md: 44,
                lg: 60
              }}
              pt={isOpenOnMobile ? 14 : 0}
              pb={0}
              minH={{
                base: isOpen ? "100vh" : 0,
                md: 0
              }}
              borderRadius={{
                base: 0,
                md: 8
              }}
              pos={{
                base: isOpen ? "relative" : "initial",
                md: "initial"
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
                    pos="fixed"
                    top={-16}
                    left={14}
                    align="center"
                    fontWeight="bold"
                  >
                    Language
                  </Flex>
              }
              {
                languagesOptions.map(({ languageId, languageName, languageIconName }) => {
                  const handleClick = () => i18n.changeLanguage(languageId).then(() => setLanguage(languageId));

                  return (
                    <MenuItem
                      key={languageId}
                      onClick={handleClick}
                      aria-selected={languageId === i18n.language}
                    >
                      <Icon
                        type="flags"
                        name={languageIconName}
                        color="none"
                      />

                      { languageName }
                    </MenuItem>
                  );
                })
              }
            </MenuList>
          </>
        );
      } }
    </Menu>
  );
};

