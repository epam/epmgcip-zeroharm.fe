import { cardsConfig, IndexesGroupsNames, type Parameter } from "@Constants";

export const getParameterCardConfig = (parameterName: Parameter, rangeGroupName: IndexesGroupsNames) => {
  const parameterCardsConfig = cardsConfig[parameterName];

  const cardConfig = parameterCardsConfig.find(({ groupName }) => groupName === rangeGroupName);

  return cardConfig;
};
