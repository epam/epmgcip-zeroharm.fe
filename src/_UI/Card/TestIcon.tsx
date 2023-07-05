import useDynamicSVGImport from "../../hooks/useDynamicSVGImport";
interface IconProps {
  name: string;
}

const TestIcon = (props: IconProps) => {
  const { name } = props;
  const { SvgIcon } = useDynamicSVGImport(name);

  if (SvgIcon) {
    return <SvgIcon />;
  }

  return null;
};

export default TestIcon;
