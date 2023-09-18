import { FC } from "react";
import { Icon, Link } from "@chakra-ui/react";
import { ReactComponent as LogoIcon } from "@Assets/images/logo.svg";

export const Logo: FC = () => (
  <Link href="/" fontSize="0">
    <Icon
      as={LogoIcon}
      fill="primaryTextColor"
      w="135px"
      h="32px"
    />
  </Link>
);
