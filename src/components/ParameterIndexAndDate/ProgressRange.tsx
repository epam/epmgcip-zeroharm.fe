import { FC } from "react";
import { Progress } from "@UI";
import { IndexesGroupsNames, indexGroupColorsMap } from "@Constants";

type ProgressRangeProps = {
  groupName: IndexesGroupsNames;
  range: {
    min: number;
    max: number;
  };
  currentParameterValue: number;
  absoluteMin: number;
  absoluteMax: number;
  indexGroupsLength: number;
  index: number;
}

export const ProgressRange: FC<ProgressRangeProps> = ({ groupName, range, currentParameterValue, absoluteMin, absoluteMax, index, indexGroupsLength }) => {
  const color = indexGroupColorsMap[groupName];
  const { min, max } = range;
  const isFirstRange = index === 0;
  const isLastRange = index === indexGroupsLength - 1;
  const withinRange = (min <= currentParameterValue) && (currentParameterValue <= max);
  const isAbsoluteMin = (0 <= currentParameterValue) && (currentParameterValue < absoluteMin) && isFirstRange;
  const isAbsoluteMax = (currentParameterValue > absoluteMax) && isLastRange;
  const withPointer = isAbsoluteMin || isAbsoluteMax || withinRange;

  if (withPointer) {
    const divider = isAbsoluteMax ? currentParameterValue : max;
    const pointerPosition = Math.round(currentParameterValue / divider * 100);

    return (
      <Progress
        key={groupName}
        colorScheme={color}
        value={100}
        withPointer
        pointerPosition={pointerPosition}
      />
    );
  }

  return (
    <Progress
      key={groupName}
      colorScheme={color}
      value={100}
    />
  );
};

