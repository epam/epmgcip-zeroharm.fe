import { parametersCardsRawData, type ParameterGroupName, type Parameter } from "@Constants";

export const getParameterCardRawData = (parameterName: Parameter, parameterGroupName: ParameterGroupName) => {
  const parameterCardsRawData = parametersCardsRawData[parameterName];

  const cardRawData = parameterCardsRawData.find(({ groupName }) => groupName === parameterGroupName);

  return cardRawData;
};
