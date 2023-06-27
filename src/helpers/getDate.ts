import dayjs from "dayjs";

export const getDate = (): string => {
  return dayjs().format("HH:mm, MMM D");
};
