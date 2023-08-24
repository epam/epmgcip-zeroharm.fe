import { FC, useState } from "react";
import { Show } from "@chakra-ui/react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { ThemeButton } from "@/components/ThemeButton/ThemeButton";

export const ThemeToggle: FC = () => {
    const [isDark, toggleColorMode] = useState(true);

  return (
    <>
      <Show above="1024px">
        <ThemeSwitcher isDark={isDark} toggleColorMode={toggleColorMode} />
      </Show>
      <Show below="1023px">
        <ThemeButton isDark={isDark} toggleColorMode={toggleColorMode} />
      </Show>
    </>
  );
};
