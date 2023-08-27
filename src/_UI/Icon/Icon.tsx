import { FC } from "react";
import { useDynamicSVGImport } from "@Hooks";

type IconProps = {
  type: "filled" | "forcards" | "stroke";
  name: string;
  color?: string;
};

export const Icon: FC<IconProps> = ({ type, name, color = "white" }) => {
  const SvgIcon = useDynamicSVGImport(type, name);

  if (SvgIcon) {
    return <SvgIcon fill={color} />;
  }

  return null;
};
