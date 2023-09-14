import { FC } from "react";
import { Menu, MenuButton, MenuList, MenuItem, HStack, Text, Icon as ChakraIcon, Flex, useDisclosure, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Variants } from "framer-motion";
import { useDataStore } from "@Store/useDataStore";
import { Icon } from "@UI";
import { useDetectWidth, useScreenScrollController } from "@Hooks";
import { resolveTranslationPath } from "@Helpers";
import { languagesData } from "@Constants";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";
import { ReactComponent as ArrowDownIcon } from "@Assets/icons/stroke/harm-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@Assets/icons/stroke/harm-arrow-up.svg";

const motionVariants: Variants = {
  enter: {
    transform: "scale(1, 1)",
    opacity: 1,
    visibility: "visible",
    transition: {
      opacity: {
        delay: 0.1,
        duration: 0.2
      },
      transform: {
        duration: 0.3
      }
    }
  },
  exit: {
    transform: "scale(1, 0)",
    opacity: 0,
    transition: {
      transform: {
        duration: 0.3
      },
      opacity: {
        delay: 0.1,
        duration: 0.2
      }
    },
    transitionEnd: {
      visibility: "hidden"
    }
  }
};

export const LanguageMenu: FC = () => {
  const { setLanguage } = useDataStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { i18n, t } = useTranslation();

  const { isLargerThan600 } = useDetectWidth();
  const isMobileWidth = !isLargerThan600;
  const isOpenOnMobile = isOpen && isMobileWidth;

  useScreenScrollController(isOpenOnMobile, !isOpenOnMobile);

  const languagesOptions = languagesData.map((languageData) => resolveTranslationPath(languageData));

  return (
    <Menu
      strategy="fixed"
      autoSelect={false}
      closeOnBlur={!isMobileWidth}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <MenuButton
        zIndex="1"
        pos={isOpenOnMobile ? "fixed" : "initial"}
        top="0"
        left="0"
      >
        <HStack spacing={isOpenOnMobile ? "0" : "8px"}>
          {
            isOpenOnMobile
              ? <Center
                  h="var(--headerMobileHeight)"
                  w="var(--headerMobileHeight)"
                >
                  <LeftArrowIcon width="20px" />
                </Center>
              : <Icon
                  type="flags"
                  color="none"
                  name={`harm-lang-flag-${i18n.language}`}
                />
          }
          <Text
            display={{ base: "none", lg: "initial" }}
          >
            { t("lang.code") }
          </Text>
          <ChakraIcon
            as={isOpen ? ArrowUpIcon : ArrowDownIcon}
            width={4}
            display={isOpenOnMobile ? "none" : "initial"}
          />
        </HStack>
      </MenuButton>
      {
        isOpenOnMobile &&
          <Flex
            w="calc(100vw - var(--headerMobileHeight))"
            h="var(--headerMobileHeight)"
            zIndex="1"
            className="bg-colored"
            color="inherit"
            pl="8px"
            pos="fixed"
            top="0"
            left="var(--headerMobileHeight)"
            align="center"
            fontWeight="bold"
          >
            Language
          </Flex>
      }
      <MenuList
        minW={{
          base: "100vw",
          md: "176px",
          lg: "240px"
        }}
        py="0"
        mt={{ md: "12px" }}
        minH={isOpenOnMobile ? "calc(100vh - var(--headerMobileHeight))" : "initial"}
        borderRadius={{ base: "0", md: "8px" }}
        transform="none"
        rootProps={{
          sx: isOpenOnMobile ? { transform: "translate3d(0, var(--headerMobileHeight), 0) !important" } : undefined
        }}
        motionProps={
          isMobileWidth
            ? {
              initial: {
                scaleZ: 1,
                scaleX: 1
              },
              variants: motionVariants,
              animate: isOpen ? "enter" : "exit"
            }
            : undefined
        }
      >
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
    </Menu>
  );
};
