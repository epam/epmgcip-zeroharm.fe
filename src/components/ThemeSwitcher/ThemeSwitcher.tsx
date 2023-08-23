import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { FC, useState } from "react";
import { ReactComponent as IconMoon } from "@/assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@/assets/icons/stroke/theme-sun.svg";
import { colors } from "../../theme/foundations/colors";

const hover = {
  cursor: "pointer"
};

const ThemeSwitcher: FC = () => {
  const [isDark, toggleColorMode] = useState(true); // const {colorMode, toggleColorMode} = useColorMode();

  return (
    <FormControl
      width="108px"
      height="26px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <FormLabel margin={"0px"} _hover={hover}>
        <IconMoon
          width="24px"
          height="24px"
          stroke={isDark ? colors.gray[0] : colors.whiteWithOpacity[20]}
        />
      </FormLabel>
      <Switch size={"lg"} onChange={() => toggleColorMode(!isDark)} />
      <FormLabel margin={"0px"} _hover={hover}>
        <IconSun
          width="24px"
          height="24px"
          fill={isDark ? colors.whiteWithOpacity[20] : colors.gray[0]}
        />
      </FormLabel>
    </FormControl>
  );
};

export default ThemeSwitcher;
