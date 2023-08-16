import { FC } from "react";
import { useDynamicSVGImport } from "@/hooks";

export type IconProps = {
  path: "filled" | "forcards" | "stroke";
  name: string;
  color?: string;
};

const Icon: FC<IconProps> = ({ path, name, color = "white" }) => {
  const SvgIcon = useDynamicSVGImport(path, name);

  if (SvgIcon) {
    return <SvgIcon fill={color} />;
  }

  return null;
};

export default Icon;
