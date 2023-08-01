import { indexesConfig, ParametersAliasesKeyType } from "@/constants";

type GroupType = {
  groupName: string,
  headingTranslationPath: string,
  questionTranslationPath: string,
  titleTranslationPath: string,
  textTranslationPath: string,
  icon: string,
  range: {
    min: number,
    max: number
  },
};

type ParameterGroupType = GroupType | undefined;

export const getParameterGroup = (parameterValue: any, groupName: ParametersAliasesKeyType): ParameterGroupType => {
  if (!parameterValue) {
    return undefined;
  }

  const parameterGroupsConfigs = indexesConfig[groupName];

  const groupWithinRangeValue = parameterGroupsConfigs?.find(config => {
    const { range } = config;
    const { min, max } = range;

    return min <= parameterValue && parameterValue <= max;
  });

  const firstGroup = parameterGroupsConfigs?.[0];
  const firstGroupMinValue = firstGroup?.range?.min;
  const isParameterValueLessThanMinVal = parameterValue <= Number(firstGroupMinValue) && Number(firstGroupMinValue) >= 0;

  const lastGroup = parameterGroupsConfigs?.[parameterGroupsConfigs?.length - 1];
  const lastGroupMaxValue = lastGroup?.range?.max;
  const isParameterValueBiggerThanMaxVal = parameterValue > Number(lastGroupMaxValue);

  if (isParameterValueLessThanMinVal) {
    return firstGroup;
  }

  if (isParameterValueBiggerThanMaxVal) {
    return lastGroup;
  }

  return groupWithinRangeValue;
};
