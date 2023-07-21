import React from "react";

const useDynamicSVGImport = (name: string) => {
  const ImportedIconRef =
    React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [SvgIcon, setSvgIcon] = React.useState<any>(null);

  React.useEffect(() => {
    const importIcon = async (): Promise<void> => {
      try {
        const icon = await import(`../assets/icons/forcards/${name}.svg`);
        ImportedIconRef.current = icon.ReactComponent;
        setSvgIcon(ImportedIconRef.current);
      } catch (err) {
        console.log(err);
      }
    };
    importIcon();
  }, [name]);

  return { SvgIcon };
};

export default useDynamicSVGImport;
