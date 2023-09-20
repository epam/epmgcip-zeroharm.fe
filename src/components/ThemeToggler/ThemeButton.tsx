import { FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { ReactComponent as IconMoon } from "@Assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@Assets/icons/stroke/theme-sun.svg";

type ThemeButtonType = {
  isDark: boolean;
  toggleColorMode: () => void;
}

const styles = {
  "@media (hover: hover)": {
    ":hover": {
      bg: "transparent",
      cursor: "pointer"
    }
  },
  "@media (hover: none)": {
    ":hover, :active, :focus": {
      cursor: "initial",
      bg: "transparent"
    }
  }
};

export const ThemeButton: FC<ThemeButtonType> = ({ isDark, toggleColorMode }) => {

  return (
    <IconButton
      aria-label="theme toggle"
      icon={isDark ? <IconSun /> : <IconMoon />}
      size="xs"
      bg="transparent"
      color="primaryColor"
      sx={styles}
      onClick={toggleColorMode}
    />
  );
};
