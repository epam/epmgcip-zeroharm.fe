import { FC, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { ThemeButton } from "@/components/ThemeButton/ThemeButton";

export const ThemeToggler: FC = () => {
  const [isDark, toggleColorMode] = useState(true);

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
