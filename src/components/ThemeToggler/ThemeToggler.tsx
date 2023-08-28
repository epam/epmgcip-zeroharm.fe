import { FC } from "react";
import { useColorMode, useMediaQuery } from "@chakra-ui/react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { ThemeButton } from "@/components/ThemeButton/ThemeButton";

export const ThemeToggler: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const [isTabletWidth] = useMediaQuery("(max-width: 1023px)");

  const components = {
    themeButton: ThemeButton,
    themeSwitcher: ThemeSwitcher
  };

  const togglerType = isTabletWidth ? "themeButton" : "themeSwitcher";
  const Toggler = components[togglerType];

  return <Toggler isDark={isDark} toggleColorMode={toggleColorMode} />;
};
