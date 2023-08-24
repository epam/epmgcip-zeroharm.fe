import { Dispatch, FC, SetStateAction } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { ReactComponent as IconMoon } from "@/assets/icons/stroke/theme-moon.svg";
import { ReactComponent as IconSun } from "@/assets/icons/stroke/theme-sun.svg";

type ThemeButtonType = {
  isDark: boolean;
  toggleColorMode: Dispatch<SetStateAction<boolean>>;
};

export const ThemeButton: FC<ThemeButtonType> = ({ isDark, toggleColorMode }) => {

  return (
    <>
      <Button
        bg={"transparent"}
        size={"xs"}
        padding={"0px"}
        _hover={{bg: "transparent"}}
        onClick={() => toggleColorMode(!isDark)}
      >
        { isDark ?
        <Icon as={IconMoon}
          width="24px"
          height="24px"
          color={"white"}
        /> :
        <Icon as={IconSun}
          width="24px"
          height="24px"
          color={"white"}
        /> }
      </Button>
    </>
  );
};
