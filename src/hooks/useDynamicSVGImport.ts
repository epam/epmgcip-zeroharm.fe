import { useState, useEffect, useRef, FC, SVGProps } from "react";

export const useDynamicSVGImport = (path: string, name: string) => {
  const ImportedIconRef =
    useRef<FC<SVGProps<SVGSVGElement>>>();
  const [SvgIcon, setSvgIcon] = useState<any>(null);

  useEffect(() => {
    const importIcon = async (): Promise<void> => {
      try {
        const icon = await import(`../assets/icons/${path}/${name}.svg`);
        ImportedIconRef.current = icon.ReactComponent;
        setSvgIcon(ImportedIconRef.current);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };
    importIcon();
  }, [name]);

  return SvgIcon;
};
