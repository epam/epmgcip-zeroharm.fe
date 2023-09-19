import { cardsConfig, ParametersAliasesKey } from "@Constants";

export const getParameterCardConfig = (parameterName: string, rangeGroupName: string) => {
  const parameterCardsConfig = cardsConfig[parameterName as ParametersAliasesKey];

  const cardConfig = parameterCardsConfig?.find(({ groupName }) => groupName === rangeGroupName);

  return cardConfig;
};
