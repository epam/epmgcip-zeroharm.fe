import { parametersCardsRawData, ParametersGroupsNames, type Parameter } from "@Constants";

export const getParameterCardRawData = (parameterName: Parameter, parameterGroupName: ParametersGroupsNames) => {
  const parameterCardsRawData = parametersCardsRawData[parameterName];

  const cardRawData = parameterCardsRawData.find(({ groupName }) => groupName === parameterGroupName);

  return cardRawData;
};
