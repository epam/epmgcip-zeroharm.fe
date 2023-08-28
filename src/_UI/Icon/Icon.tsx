import { FC } from "react";
import { useDynamicSVGImport } from "@/hooks";

type IconProps = {
  type: "filled" | "forcards" | "stroke" | "flags";
  name: string;
  color?: string;
};

const Icon: FC<IconProps> = ({ type, name, color = "white" }) => {
  const SvgIcon = useDynamicSVGImport(type, name);

  if (SvgIcon) {
    return <SvgIcon fill={color} />;
  }

  return null;
};

export default Icon;
