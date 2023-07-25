import useDynamicSVGImport from "../../hooks/useDynamicSVGImport";

type CardIconProps = {
  name: string;
};

const CardIcon: React.FC<CardIconProps> = ({ name }) => {
  const SvgIcon = useDynamicSVGImport(name);

  if (SvgIcon) {
    return <SvgIcon />;
  }

  return null;
};

export default CardIcon;
