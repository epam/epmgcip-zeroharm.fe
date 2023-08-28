import { FC } from "react";
import { useColorMode, useMediaQuery } from "@chakra-ui/react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { ThemeButton } from "@/components/ThemeButton/ThemeButton";

export const ThemeToggler: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const [isTabletWidth] = useMediaQuery("(max-width: 1023px)");

  return (
    <>
      { isTabletWidth ? (
        <ThemeButton isDark={isDark} toggleColorMode={toggleColorMode} />
      ) : (
        <ThemeSwitcher isDark={isDark} toggleColorMode={toggleColorMode} />
      ) }
    </>
  );
};
