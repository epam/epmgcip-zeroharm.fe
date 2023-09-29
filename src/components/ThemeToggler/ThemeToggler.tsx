import { FC } from "react";
import { useColorMode } from "@chakra-ui/react";
import { useDetectWidth } from "@Hooks";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeButton } from "./ThemeButton";

export const ThemeToggler: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isLargerThan1024 } = useDetectWidth();

  const isDark = colorMode === "dark";

  const components = {
    themeButton: ThemeButton,
    themeSwitcher: ThemeSwitcher
  };

  const togglerType = isLargerThan1024 ? "themeSwitcher" : "themeButton";
  const Toggler = components[togglerType];

  return <Toggler isDark={isDark} toggleColorMode={toggleColorMode} />;
};
