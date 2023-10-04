import { FC } from "react";
import { Menu, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useDetectWidth, useScreenScrollController } from "@Hooks";
import { LanguageMenuList } from "./LanguageMenuList";
import { LanguageMenuButton } from "./LanguageMenuButton";
import { MobileMenuHeadingTip } from "../MenuCommonComponents/MobileMenuHeadingTip";

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
          <MobileMenuHeadingTip fontWeight="bold">
            { t("lang.subject_name") }
          </MobileMenuHeadingTip>
        )
      }
      <LanguageMenuList isOpenOnMobile={isOpenOnMobile} isOpen={isOpen} />
    </Menu>
  );
};
