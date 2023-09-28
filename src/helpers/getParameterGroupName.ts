import { parametersGroupsRanges, type Parameter } from "@Constants";

export const getParameterGroupName = (parameterValue: number, parameterName: Parameter) => {
  const parameterGroupRanges = parametersGroupsRanges[parameterName];

  const firstGroup = parameterGroupRanges?.[0];
  if (parameterValue <= firstGroup.range.min && parameterValue >= 0) {
    return firstGroup.groupName;
  }

  const lastGroup = parameterGroupRanges?.[parameterGroupRanges?.length - 1];
  if (parameterValue > lastGroup.range.max) {
    return lastGroup.groupName;
  }

  return parameterGroupRanges?.find(({ range: { min, max } }) => min <= parameterValue && parameterValue <= max)?.groupName;
};
