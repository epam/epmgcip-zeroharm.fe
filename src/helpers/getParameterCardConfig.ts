import { cardsConfig, ParametersAliasesKeyType } from "@Constants";

export const getParameterCardConfig = (parameterName: string, rangeGroupName: string) => {
  const parameterCardsConfig = cardsConfig[parameterName as ParametersAliasesKeyType];

  const cardConfig = parameterCardsConfig?.find(({ groupName }) => groupName === rangeGroupName);

  return cardConfig;
};
