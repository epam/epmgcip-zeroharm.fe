import { ParametersAliasesKeyType } from "@/constants";
import { getParameterGroup } from "./getParameterGroup";
import { getParameterCardConfig } from "./getParameterCardConfig";
import { translateCardConfigData } from "./translateCardConfigData";

export const getCardData = (parameterValue: number, parameterName: ParametersAliasesKeyType) => {
  const groupName = getParameterGroup(parameterValue, parameterName);

  let parameterCardConfig;
  if (groupName) {
    parameterCardConfig = getParameterCardConfig(parameterName, groupName);
  }

  let cardTranslations;
  if (parameterCardConfig) {
    cardTranslations = translateCardConfigData(parameterCardConfig);
  }

  return cardTranslations;
};
