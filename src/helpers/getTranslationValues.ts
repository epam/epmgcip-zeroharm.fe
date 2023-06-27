import { t } from "i18next";
import translations from "@/i18n/locales/en/translations.json";

type KeyType = keyof typeof translations;

export const getTranslationValues = (key: string, returnObjects?: boolean) => {
  const keys = translations[key as KeyType];

  return Object.keys(keys).map((value) =>
    t(`${key}.${value}`, { returnObjects })
  );
};
