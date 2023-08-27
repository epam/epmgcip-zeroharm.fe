import { FC } from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { ReactComponent as IconMoon } from "@/assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@/assets/icons/stroke/theme-sun.svg";

export const ThemeButton: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <IconButton
      aria-label="theme toggle"
      icon={isDark ? <IconSun /> : <IconMoon />}
      size="xs"
      bg="transparent"
      color="white"
      _hover={{bg: "transparent"}}
      onClick={toggleColorMode}
    />
  );
};
