import { type Parameter } from "@Constants";
import { getParameterGroup } from "./getParameterGroup";
import { getParameterCardConfig } from "./getParameterCardConfig";
import { resolveTranslationPath } from "./resolveTranslationPath";

export const getCardData = (parameterValue: number, parameterName: Parameter | null) => {
  if (!parameterName) return;

  const groupName = getParameterGroup(parameterValue, parameterName);

  if (!groupName) return;

  const parameterCardConfig = getParameterCardConfig(parameterName, groupName);

  if (!parameterCardConfig) return;

  return resolveTranslationPath(parameterCardConfig);
};
