import { Dispatch, FC, SetStateAction } from "react";
import { FormControl, FormLabel, Switch, Icon } from "@chakra-ui/react";
import { ReactComponent as IconMoon } from "@/assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@/assets/icons/stroke/theme-sun.svg";

const hover = {
  cursor: "pointer"
};

type ThemeSwitcherType = {
  isDark: boolean;
  toggleColorMode: Dispatch<SetStateAction<boolean>>;
};

export const ThemeSwitcher: FC<ThemeSwitcherType> = ({ isDark, toggleColorMode }) => {

  return (
    <FormControl
      width="108px"
      height="26px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FormLabel
        margin={"0px"}
        height={"24px"}
        _hover={hover}
      >
        <Icon
          as={IconMoon}
          width="24px"
          height="24px"
          color={isDark ? "white" : "whiteAlpha.400"}
        />
      </FormLabel>
      <Switch size={"lg"} onChange={() => toggleColorMode(!isDark)} />
      <FormLabel
        margin={"0px"}
        height={"24px"}
        _hover={hover}
      >
        <Icon
          as={IconSun}
          width="24px"
          height="24px"
          color={isDark ? "whiteAlpha.400" : "white"}
        />
      </FormLabel>
    </FormControl>
  );
};
