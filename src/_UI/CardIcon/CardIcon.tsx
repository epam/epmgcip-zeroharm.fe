import useDynamicSVGImport from "../../hooks/useDynamicSVGImport";
interface CardIconProps {
  name: string;
}

const CardIcon = (props: CardIconProps) => {
  const { name } = props;
  const { error, loading, SvgIcon } = useDynamicSVGImport(name);
  // console.log("🚀 ~ file: CardIcon.tsx:10 ~ CardIcon ~ error:", error);

  // console.log(error, loading, SvgIcon);
  if (error) {
    return <p> "This is error.."</p>;
  }

  if (loading) {
    return <p>"Loading...";</p>;
  }
  if (SvgIcon) {
    return <SvgIcon />;
  }

  if (!SvgIcon) {
    return <p>"No SVGIcon";</p>;
  }

  return <p>Nothing to return</p>;
};

export default CardIcon;
