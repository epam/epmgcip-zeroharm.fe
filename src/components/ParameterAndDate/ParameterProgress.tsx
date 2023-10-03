import { FC } from "react";
import { Progress } from "@UI";

type ParameterProgressProps = {
  color: string;
  value: number;
  max: number;
  withPointer: boolean;
}

export const ParameterProgress: FC<ParameterProgressProps> = ({ color, value, max, withPointer }) => {
  const progressCommonProps = {
    color,
    value: 100
  };

  if (!withPointer) {
    return <Progress {...progressCommonProps} />;
  }

  const pointerPosition = Math.round(value / max * 100);

  return (
    <Progress
      {...progressCommonProps}
      pointerPosition={pointerPosition}
    />
  );
};

