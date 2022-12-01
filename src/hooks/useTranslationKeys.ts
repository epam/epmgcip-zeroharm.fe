import translations from "../i18n/locales/en/translations.json";
import { t } from "i18next";

type KeyType = keyof typeof translations;

export const useTranslationKeys = (key: string) => {
  const keys = translations[key as KeyType];
  return Object.keys(keys).map((value) => t(`${key}.${value}`));
};
