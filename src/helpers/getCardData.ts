import { CardData, type Parameter } from "@Constants";
import { getParameterGroupName } from "./getParameterGroupName";
import { getParameterCardRawData } from "./getParameterCardData";
import { resolveTranslationPath } from "./resolveTranslationPath";

export const getCardData = (parameterValue: number, parameterName: Parameter): CardData | undefined => {
  const groupName = getParameterGroupName(parameterValue, parameterName);

  if (!groupName) return;

  const parameterCardRawData = getParameterCardRawData(parameterName, groupName);

  if (!parameterCardRawData) return;

  return resolveTranslationPath(parameterCardRawData);
};
