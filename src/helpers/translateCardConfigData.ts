import { t } from "i18next";

export const translateCardConfigData = (cardData: any) => {
  return Object.keys(cardData)?.reduce((translatingCardData, key) => {

    let value = cardData?.[key as KeyType];

    if (typeof value === "object" && "translationPath" in value) {
      value = t(value?.translationPath);
    }

    return {
      ...translatingCardData,
      [key]: value
    };
  }, Object.assign({}, cardData));
};
