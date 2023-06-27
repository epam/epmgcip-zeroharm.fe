import translations from "@/i18n/locales/en/translations.json";

type KeyType = keyof typeof translations;

export const getTranslationKeys = (key: KeyType) => {
  return Object.keys(translations[key]);
};
