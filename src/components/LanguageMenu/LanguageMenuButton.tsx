import { FC } from "react";
import { Center, HStack, MenuButton, Icon as ChakraIcon, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Icon } from "@UI";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";
import { ReactComponent as ArrowDownIcon } from "@Assets/icons/stroke/harm-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@Assets/icons/stroke/harm-arrow-up.svg";

type LanguageMenuButtonProps = {
  isOpenOnMobile: boolean;
  isOpen: boolean;
}

export const LanguageMenuButton: FC<LanguageMenuButtonProps> = ({ isOpenOnMobile, isOpen }) => {
  const { i18n, t } = useTranslation();

  return (
    <MenuButton
      zIndex="1"
      pos={isOpenOnMobile ? "fixed" : "initial"}
      top="0"
      left="0"
    >
      <HStack spacing={isOpenOnMobile ? "0" : "8px"}>
        {
          isOpenOnMobile && (
            <Center
              bgColor="secondaryBgColor"
              h="var(--headerMobileHeight)"
              w="var(--headerMobileHeight)"
            >
              <LeftArrowIcon width="20px" />
            </Center>
          )
        }
        {
          !isOpenOnMobile && (
            <>
              <Icon
                type="flags"
                color="none"
                name={`harm-lang-flag-${i18n.language}`}
              />
              <Text display={{ base: "none", lg: "initial" }}>
                { t("lang.code") }
              </Text>
              <ChakraIcon
                as={isOpen ? ArrowUpIcon : ArrowDownIcon}
                width="16px"
              />
            </>
          )
        }
      </HStack>
    </MenuButton>
  );
};
