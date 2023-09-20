import { parametersCardsRawData, IndexesGroupsNames, type Parameter } from "@Constants";

export const getParameterCardRawData = (parameterName: Parameter, indexGroupName: IndexesGroupsNames) => {
  const parameterCardsRawData = parametersCardsRawData[parameterName];

  const cardRawData = parameterCardsRawData.find(({ groupName }) => groupName === indexGroupName);

  return cardRawData;
};
