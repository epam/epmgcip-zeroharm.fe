import { SVG } from "leaflet";
import React from "react";

const useDynamicSVGImport = (name: string) => {
  const ImportedIconRef =
    React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<unknown>();
  const [SvgIcon, setSvgIcon] = React.useState<any>(null);

  React.useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        const icon = await import(`../assets/icons/forcards/${name}.svg`);
        ImportedIconRef.current = icon.ReactComponent;
        setSvgIcon(ImportedIconRef.current);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  return { error, loading, SvgIcon };
};

export default useDynamicSVGImport;
