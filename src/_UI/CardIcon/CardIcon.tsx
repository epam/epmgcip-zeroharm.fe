import useDynamicSVGImport from "../../hooks/useDynamicSVGImport";
interface CardIconProps {
  name: string;
}

const CardIcon = (props: CardIconProps) => {
  const { name } = props;

  const { SvgIcon } = useDynamicSVGImport(name);

  if (SvgIcon) {
    return <SvgIcon />;
  }

  return null;
};

export default CardIcon;
