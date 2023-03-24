import translations from "@/i18n/locales/en/translations.json";
import { t } from "i18next";

type KeyType = keyof typeof translations;

export const useTranslationValues = (key: string, returnObjects?: boolean) => {
  const keys = translations[key as KeyType];
  return Object.keys(keys).map((value) =>
    t(`${key}.${value}`, { returnObjects })
  );
};
