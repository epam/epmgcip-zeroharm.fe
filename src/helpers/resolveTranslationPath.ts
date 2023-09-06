import { t } from "i18next";

export const resolveTranslationPath = (data: any) => {
  return Object.keys(data)?.reduce((dataObj, key) => {

    let value = data?.[key as KeyType];

    if (typeof value === "object" && "translationPath" in value) {
      value = t(value?.translationPath);
    }

    return {
      ...dataObj,
      [key]: value
    };
  }, Object.assign({}, data));
};
