import * as React from "react";
import { Progress as ChakraProgress, ProgressProps } from "@chakra-ui/react";

type ProgressType = ProgressProps & {
  isGradient?: boolean;
};

export const Progress: React.FC<ProgressType> = ({
  colorScheme,
  value,
  isGradient,
}) => {
  const gradientStyles = isGradient && {
    bgGradient:
      "linear-gradient(90deg, #339944 0%, #FFA01C 20%, #FC7753 40%, #E6484E 60%, #C53446 80%, #7D5BA6 100%);",
    overflow: "visible",
    bg: "none",
    colorScheme: "none",
    _before: {
      content: "''",
      position: "absolute",
      top: "-2px",
      left: `calc(${value || 0}% - 2px)`,
      boxSize: "8px",
      zIndex: "10",
      bg: "white",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "gray.700",
      borderRadius: "100%",
    },
  };

  return (
    <ChakraProgress
      value={value}
      colorScheme={colorScheme}
      {...gradientStyles}
    />
  );
};
