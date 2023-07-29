import dayjs from "dayjs";
import "dayjs/locale/ru";
import "dayjs/locale/uz-latn";
import i18next from "i18next";

export const getDate = (): string => {
  switch (i18next.language) {
    case "ru":
      return dayjs().locale("ru").format("HH:mm, D MMM");
    case "uz":
      return dayjs().locale("uz-latn").format("HH:mm, D MMM");
    default:
      return dayjs().locale("en").format("HH:mm, MMM D");
  }
};
