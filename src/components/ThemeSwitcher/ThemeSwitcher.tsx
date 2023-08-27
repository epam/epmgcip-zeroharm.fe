import { FC } from "react";
import { FormControl, FormLabel, Switch, Icon, useColorMode } from "@chakra-ui/react";
import { ReactComponent as IconMoon } from "@/assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@/assets/icons/stroke/theme-sun.svg";

const hover = {
  cursor: "pointer"
};

export const ThemeSwitcher: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

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
          color={isDark ? "white" : "whiteAlpha.400"}
        />
      </FormLabel>
      <Switch
        size={"lg"}
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
          color={isDark ? "whiteAlpha.400" : "white"}
        />
      </FormLabel>
    </FormControl>
  );
};
