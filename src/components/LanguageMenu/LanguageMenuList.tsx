import { FC } from "react";
import { MenuList } from "@chakra-ui/react";
import { languagesData } from "@Constants";
import { resolveTranslationPath } from "@Helpers";
import { menuListMotionVariants, menuListMotionVariantOptions } from "@Theme/transitions/menuListMotionVariants";
import { LanguageMenuItem } from "./LanguageMenuItem";

type LanguageMenuListProps = {
  isOpenOnMobile: boolean;
  isOpen: boolean;
}

export const LanguageMenuList: FC<LanguageMenuListProps> = ({ isOpenOnMobile, isOpen }) => {
  const languagesOptions = languagesData.map((languageData) => resolveTranslationPath(languageData));

  return (
    <MenuList
      minW={{ base: "100vw", md: "176px", lg: "240px" }}
      py="0"
      mt={{ md: "12px" }}
      minH={isOpenOnMobile ? "calc(100vh - var(--headerMobileHeight))" : "initial"}
      rootProps={{
        sx: isOpenOnMobile ? { transform: "translate3d(0, var(--headerMobileHeight), 0) !important" } : undefined
      }}
      motionProps={{
        variants: menuListMotionVariants,
        animate: isOpen ? menuListMotionVariantOptions.ENTER : menuListMotionVariantOptions.EXIT
      }}
    >
      {
        languagesOptions.map((languageOption) => (
          <LanguageMenuItem
            key={languageOption.languageId}
            languageOption={languageOption}
          />
        ))
      }
    </MenuList>
  );
};
