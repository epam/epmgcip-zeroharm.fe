import { FC } from "react";
import { MenuItem, MenuList } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Variants } from "framer-motion";
import { Icon } from "@UI";
import { languagesData } from "@Constants";
import { resolveTranslationPath } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";

type LanguageMenuListProps = {
  isOpenOnMobile: boolean;
  isOpen: boolean;
}

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

export const LanguageMenuList: FC<LanguageMenuListProps> = ({ isOpenOnMobile, isOpen }) => {
  const { setLanguage } = useDataStore();
  const { i18n } = useTranslation();

  const languagesOptions = languagesData.map((languageData) => resolveTranslationPath(languageData));

  const menuItemsToRender = languagesOptions.map(({ languageId, languageName, languageIconName }) => {
    const handleClick = () => i18n.changeLanguage(languageId).then(() => setLanguage(languageId));

    return (
      <MenuItem
        key={languageId}
        onClick={handleClick}
        aria-selected={languageId === i18n.language}
        h="48px"
        gap="12px"
      >
        <Icon
          type="flags"
          name={languageIconName}
          color="none"
        />

        { languageName }
      </MenuItem>
    );
  });

  return (
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
      rootProps={{
        sx: isOpenOnMobile ? { transform: "translate3d(0, var(--headerMobileHeight), 0) !important" } : undefined
      }}
      motionProps={{
        variants: motionVariants,
        animate: isOpen ? "enter" : "exit"
      }}
    >
      { menuItemsToRender }
    </MenuList>
  );
};
