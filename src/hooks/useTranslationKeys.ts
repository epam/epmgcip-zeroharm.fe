import translations from "@/i18n/locales/en/translations.json";
type KeyType = keyof typeof translations;

export const useTranslationKeys = (key: KeyType) =>
  Object.keys(translations[key]);
