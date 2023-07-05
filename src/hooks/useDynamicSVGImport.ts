import React from "react";

const useDynamicSVGImport = (name: string) => {
  const ImportedIconRef = React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();

  React.useEffect(() => {
    const importIcon = async (): Promise<void> => {
      try {
        const icon = await import(`../assets/icons/forcards/${name}.svg`);

        ImportedIconRef.current = icon.ReactComponent;
      } catch (err) {
        console.log("this is error");
      }
    };
    importIcon();
  }, [name]);

  return { SvgIcon: ImportedIconRef.current };
};

export default useDynamicSVGImport;
