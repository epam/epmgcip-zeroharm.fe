import * as React from "react";

const useDynamicSVGImport = (name: string) => {
  const ImportedIconRef =
    React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const ImportedIconRef1 =
    React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();

  React.useEffect(() => {
    const importIcon = async (): Promise<void> => {
      try {
        const name1 = "harm-cook";
        // const icon = await import(`../assets/icons/forcards/${name}.svg`);

        // ImportedIconRef.current = icon.ReactComponent;
        ImportedIconRef.current = await import(
          `../assets/icons/forcards/${name1}.svg`
        );
        // await import(`../assets/icons/forcards/harm-cook.svg`);
        // .ReactComponent;
        ImportedIconRef1.current =
          (await import(`../assets/icons/forcards/${name}.svg`)).default
          // (await import(`../assets/icons/forcards/harm-cook.svg`)).default;
        // .ReactComponent;

        console.log("ref", ImportedIconRef);
        console.log("ref1", ImportedIconRef1);
      } catch (err) {
        console.log("this is error");
      }
    };
    importIcon();
  }, [name]);

  return { SvgIcon: ImportedIconRef.current };
};

export default useDynamicSVGImport;
