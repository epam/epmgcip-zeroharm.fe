import { FC } from "react";
import { MenuList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { languagesData } from "@Constants";
import { resolveTranslationPath } from "@Helpers";
import { menuListMotionVariants, menuListMotionVariantOptions, menuItemsMotionProps } from "@Theme/transitions/menuListMotionVariants";
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
      mt={{ base: "8px", md: "12px" }}
      minH={isOpenOnMobile ? "calc(100vh - var(--headerMobileHeight))" : "initial"}
      motionProps={{
        variants: menuListMotionVariants,
        animate: isOpen ? menuListMotionVariantOptions.ENTER : menuListMotionVariantOptions.EXIT
      }}
    >
      <motion.ul variants={menuItemsMotionProps}>
        {
          languagesOptions.map((languageOption) => (
            <LanguageMenuItem
              key={languageOption.languageId}
              languageOption={languageOption}
            />
          ))
        }
      </motion.ul>
    </MenuList>
  );
};
