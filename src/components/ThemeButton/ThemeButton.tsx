import { Dispatch, FC, SetStateAction } from "react";
import { IconButton } from "@chakra-ui/react";
import { ReactComponent as IconMoon } from "@/assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@/assets/icons/stroke/theme-sun.svg";

type ThemeButtonType = {
  isDark: boolean;
  toggleColorMode: Dispatch<SetStateAction<boolean>>;
};

export const ThemeButton: FC<ThemeButtonType> = ({ isDark, toggleColorMode }) => {

  return (
    <IconButton
      aria-label="theme toggle"
      icon={isDark ? <IconSun /> : <IconMoon />}
      size="xs"
      bg="transparent"
      color="white"
      _hover={{bg: "transparent"}}
      onClick={() => toggleColorMode(!isDark)}
    />
  );
};
