import { FC } from "react";
import { Progress } from "@UI";
import { IndexGroupRange, indexGroupColorsMap } from "@Constants";

type ProgressRangeProps = {
  indexGroup: IndexGroupRange;
  currentParameterValue: number;
  isFirstRange: boolean;
  isLastRange: boolean;
}

export const ProgressRange: FC<ProgressRangeProps> = ({ indexGroup, currentParameterValue, isFirstRange, isLastRange }) => {
  const { groupName, range } = indexGroup;
  const color = indexGroupColorsMap[groupName];
  const { min, max } = range;
  const absoluteMin = isFirstRange && min;
  const absoluteMax = isLastRange && max;
  const withinRange = (min <= currentParameterValue) && (currentParameterValue <= max);
  const isAbsoluteMin = absoluteMin && (0 <= currentParameterValue) && (currentParameterValue < absoluteMin) && isFirstRange;
  const isAbsoluteMax = absoluteMax && (currentParameterValue > absoluteMax) && isLastRange;
  const withPointer = isAbsoluteMin || isAbsoluteMax || withinRange;

  if (withPointer) {
    const divider = isAbsoluteMax ? currentParameterValue : max;
    const pointerPosition = Math.round(currentParameterValue / divider * 100);

    return (
      <Progress
        key={groupName}
        color={color}
        value={100}
        withPointer
        pointerPosition={pointerPosition}
      />
    );
  }

  return (
    <Progress
      key={groupName}
      color={color}
      value={100}
    />
  );
};

