import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "@Assets/images/logo-new.svg";

export const Logo: FC = () => {

  return (
    <Link to="/">
      <img
        src={logo}
        alt="logo"
        width="135px"
      />
    </Link>
  );
};
