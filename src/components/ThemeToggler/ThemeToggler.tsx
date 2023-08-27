import { FC } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { ThemeButton } from "@/components/ThemeButton/ThemeButton";

export const ThemeToggler: FC = () => {
  const [isTabletWidth] = useMediaQuery("(max-width: 1023px)");

  return (
    <>
      { isTabletWidth ? (
        <ThemeButton />
      ) : (
        <ThemeSwitcher />
      ) }
    </>
  );
};
