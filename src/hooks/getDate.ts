import dayjs from "dayjs";

const getDate = (): string => { 
      return dayjs().format("HH:mm, MMM D");
};

export default getDate;
