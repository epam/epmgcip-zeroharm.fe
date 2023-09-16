import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "@Assets/images/logo.svg";

export const Logo: FC = () => (
  <Link to="/">
    <LogoIcon width="135px" fill="var(--primaryColor)" />
  </Link>
);
