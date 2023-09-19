import { FC } from "react";
import { Progress as ChakraProgress, ProgressProps } from "@chakra-ui/react";

type ProgressType = ProgressProps & {
  withPointer?: boolean;
  pointerPosition?: number
};

export const Progress: FC<ProgressType> = ({
  colorScheme,
  value,
  withPointer,
  pointerPosition
}) => {
  const withPointerStyles = withPointer && pointerPosition !== undefined && {
    _before: {
      content: "''",
      position: "absolute",
      top: "-4px",
      left: `calc(${0.88 * pointerPosition}% - 4px)`,
      boxSize: "8px",
      zIndex: "10",
      bg: "primaryColor",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "indicator.bg",
      borderRadius: "100%"
    }
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
