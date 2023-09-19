import { indexesConfig, ParametersAliasesKey } from "@Constants";

export const getParameterGroup = (parameterValue: number, parameterName: ParametersAliasesKey) => {
  const parameterGroupsConfigs = indexesConfig[parameterName];

  const firstGroup = parameterGroupsConfigs?.[0];
  const firstGroupMinValue = firstGroup?.range?.min;
  const isParameterValueLessThanMinVal = parameterValue <= Number(firstGroupMinValue) && Number(firstGroupMinValue) >= 0;
  const firstGroupName = firstGroup?.groupName;

  const groupWithinRangeValue = parameterGroupsConfigs?.find(config => {
    const { range } = config;
    const { min, max } = range;

    return min <= parameterValue && parameterValue <= max;
  })?.groupName;

  const lastGroup = parameterGroupsConfigs?.[parameterGroupsConfigs?.length - 1];
  const lastGroupMaxValue = lastGroup?.range?.max;
  const isParameterValueBiggerThanMaxVal = parameterValue > Number(lastGroupMaxValue);
  const lastGroupName = lastGroup?.groupName;

  const rangeGroupName =
    isParameterValueLessThanMinVal ? firstGroupName :
    isParameterValueBiggerThanMaxVal ? lastGroupName :
    groupWithinRangeValue;

  return rangeGroupName;
};
