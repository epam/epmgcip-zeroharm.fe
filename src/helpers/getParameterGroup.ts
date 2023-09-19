import { indexesConfig, type Parameter } from "@Constants";

export const getParameterGroup = (parameterValue: number, parameterName: Parameter) => {
  const parameterGroupsConfigs = indexesConfig[parameterName];

  const { range: { min: firstGroupMinValue }, groupName: firstGroupName } = parameterGroupsConfigs?.[0];
  const isParameterValueLessThanMinVal = parameterValue <= firstGroupMinValue && firstGroupMinValue >= 0;

  const groupWithinRangeValue = parameterGroupsConfigs?.find(({ range: { min, max } }) => min <= parameterValue && parameterValue <= max)?.groupName;

  const { range: { max: lastGroupMaxValue }, groupName: lastGroupName } = parameterGroupsConfigs?.[parameterGroupsConfigs?.length - 1];
  const isParameterValueBiggerThanMaxVal = parameterValue > lastGroupMaxValue;

  const rangeGroupName =
    isParameterValueLessThanMinVal
      ? firstGroupName
      : isParameterValueBiggerThanMaxVal
        ? lastGroupName
        : groupWithinRangeValue;

  return rangeGroupName;
};
