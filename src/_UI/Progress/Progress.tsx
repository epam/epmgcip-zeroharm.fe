import { FC } from "react";
import { Progress as ChakraProgress, ProgressProps } from "@chakra-ui/react";

type ProgressType = ProgressProps & {
  pointerPosition?: number
};

export const Progress: FC<ProgressType> = ({
  color,
  value,
  pointerPosition
}) => {
  const withPointerStyles = pointerPosition !== undefined && {
    _before: {
      content: "''",
      position: "absolute",
      top: "-4px",
      left: `calc(${0.88 * pointerPosition}% - 4px)`,
      boxSize: "8px",
      bgColor: "primaryColor",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "parameter.primary",
      borderRadius: "100%"
    }
  };

  return (
    <ChakraProgress
      w="100%"
      overflow="initial"
      value={value}
      variant={color}
      {...withPointerStyles}
    />
  );
};
