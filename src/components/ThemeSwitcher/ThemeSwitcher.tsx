import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { FC, useState } from "react";
import { ReactComponent as IconMoon } from "@/assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@/assets/icons/stroke/theme-sun.svg";

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
      <FormLabel margin={"0px"} _hover={{cursor: "pointer"}}>
        <IconMoon
          width="24px"
          height="24px"
          stroke={isDark ? "white" : "rgba(255, 255, 255, 0.3)"}
        />
      </FormLabel>
      <Switch size={"lg"} onChange={() => toggleColorMode(!isDark)}/>
      <FormLabel margin={"0px"} _hover={{cursor: "pointer"}}>
        <IconSun
          width="24px"
          height="24px"
          fill={isDark ? "rgba(255, 255, 255, 0.3)" : "white"}
        />
      </FormLabel>
    </FormControl>
  );
};

export default ThemeSwitcher;
