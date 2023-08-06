import { FC } from "react";
import { useDynamicSVGImport } from "@/hooks";

type CardIconProps = {
  name: string;
};

const CardIcon: FC<CardIconProps> = ({ name }) => {
  const SvgIcon = useDynamicSVGImport(name);

  if (SvgIcon) {
    return <SvgIcon />;
  }

  return null;
};

export default CardIcon;
