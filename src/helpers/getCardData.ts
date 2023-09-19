import { ParametersAliasesKey } from "@Constants";
import { getParameterGroup } from "./getParameterGroup";
import { getParameterCardConfig } from "./getParameterCardConfig";
import { resolveTranslationPath } from "./resolveTranslationPath";

export const getCardData = (parameterValue: number, parameterName: ParametersAliasesKey | null) => {
  if (!parameterName) return;

  const groupName = getParameterGroup(parameterValue, parameterName);

  let parameterCardConfig;
  if (groupName) {
    parameterCardConfig = getParameterCardConfig(parameterName, groupName);
  }

  let cardTranslations;
  if (parameterCardConfig) {
    cardTranslations = resolveTranslationPath(parameterCardConfig);
  }

  return cardTranslations;
};
