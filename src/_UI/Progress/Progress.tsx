import * as React from "react";
import { Progress as ChakraProgress, ProgressProps } from "@chakra-ui/react";

type ProgressType = ProgressProps & {
  withPointer?: boolean;
  pointerPosition?: number
};

export const Progress: React.FC<ProgressType> = ({
  colorScheme,
  value,
  withPointer,
  pointerPosition
}) => {
  const withPointerStyles = withPointer && {
    _before: {
      content: "''",
      position: "absolute",
      top: "-3px",
      left: `calc(${pointerPosition}% - 8px)`,
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
      w="100%"
      overflow="initial"
      value={value}
      colorScheme={colorScheme}
      {...withPointerStyles}
    />
  );
};
