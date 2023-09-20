import { FC } from "react";
import { FormControl, FormLabel, Switch, Icon } from "@chakra-ui/react";
import { ReactComponent as IconMoon } from "@Assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@Assets/icons/stroke/theme-sun.svg";

type ThemeSwitcherType = {
  isDark: boolean;
  toggleColorMode: () => void;
}

const hoverStyle = {
  "@media (hover: hover)": {
    ":hover": {
      cursor: "pointer"
    }
  }
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
        margin="0px"
        height="24px"
        sx={hoverStyle}
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
        sx={hoverStyle}
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
