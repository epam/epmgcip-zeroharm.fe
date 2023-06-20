import dayjs from "dayjs";

const getDate = (time: 12 | 24): string => {
  switch (time) {
    case 12:
      return dayjs().format("hh:mm, MMM D");
    case 24:
      return dayjs().format("HH:mm, MMM D");
  }
};

export default getDate;
