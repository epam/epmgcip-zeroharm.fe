import { FC } from "react";
import { chakra, Menu, Flex, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useDetectWidth, useScreenScrollController } from "@Hooks";
import { LanguageMenuList } from "./LanguageMenuList";
import { LanguageMenuButton } from "./LanguageMenuButton";

const MobileHeadingTip = chakra(Flex, {
  baseStyle: {
    w: "calc(100vw - var(--headerMobileHeight))",
    h: "var(--headerMobileHeight)",
    zIndex: "1",
    bgColor: "secondaryBgColor",
    color: "inherit",
    pl: "8px",
    pos: "fixed",
    top: "0",
    left: "var(--headerMobileHeight)",
    alignItems: "center",
    fontWeight: "bold"
  }
});

export const LanguageMenu: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  const { isLargerThan600 } = useDetectWidth();
  const isMobileWidth = !isLargerThan600;
  const isOpenOnMobile = isOpen && isMobileWidth;

  useScreenScrollController(isOpenOnMobile, !isOpenOnMobile);

  return (
    <Menu
      variant="language"
      strategy="fixed"
      autoSelect={false}
      closeOnBlur={!isMobileWidth}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <LanguageMenuButton isOpenOnMobile={isOpenOnMobile} isOpen={isOpen} />
      {
        isOpenOnMobile && (
          <MobileHeadingTip>
            { t("lang.subject_name") }
          </MobileHeadingTip>
        )
      }
      <LanguageMenuList isOpenOnMobile={isOpenOnMobile} isOpen={isOpen} />
    </Menu>
  );
};
