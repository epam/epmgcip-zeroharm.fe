import { FC } from "react";
import { FormControl, FormLabel, Switch, Icon } from "@chakra-ui/react";
import { useIncludeHover } from "@Hooks";
import { ReactComponent as IconMoon } from "@Assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@Assets/icons/stroke/theme-sun.svg";

type ThemeSwitcherType = {
  isDark: boolean;
  toggleColorMode: () => void;
}

export const ThemeSwitcher: FC<ThemeSwitcherType> = ({ isDark, toggleColorMode }) => {
  const shouldIncludeHover = useIncludeHover();

  const hover = shouldIncludeHover ? {cursor: "pointer"} : {cursor: "initial"};

  return (
    <FormControl
      width="108px"
      height="26px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FormLabel
        margin="0px"
        height="24px"
        _hover={hover}
      >
        <Icon
          as={IconMoon}
          width="24px"
          height="24px"
          color={isDark ? "white" : "navyBlue.200"}
        />
      </FormLabel>
      <Switch
        size="lg"
        isChecked={isDark ? false : true}
        onChange={toggleColorMode}
      />
      <FormLabel
        margin="0px"
        height="24px"
        _hover={hover}
      >
        <Icon
          as={IconSun}
          width="24px"
          height="24px"
          color={isDark ? "whiteAlpha.400" : "navyBlue.900"}
        />
      </FormLabel>
    </FormControl>
  );
};
