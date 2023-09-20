import { CardData, type Parameter } from "@Constants";
import { getParameterIndexGroupName } from "./getParameterIndexGroupName";
import { getParameterCardRawData } from "./getParameterCardData";
import { resolveTranslationPath } from "./resolveTranslationPath";

export const getCardData = (parameterValue: number, parameterName: Parameter): CardData | undefined => {
  const groupName = getParameterIndexGroupName(parameterValue, parameterName);

  if (!groupName) return;

  const parameterCardRawData = getParameterCardRawData(parameterName, groupName);

  if (!parameterCardRawData) return;

  return resolveTranslationPath(parameterCardRawData);
};
