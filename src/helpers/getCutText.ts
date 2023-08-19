import { LETTERS_LIMIT } from "@/constants";
import { getSubString } from "./getSubString";

export const getCutText = (text: string) => {
  const subText = getSubString(text, LETTERS_LIMIT);
  const textWithoutDot = subText.endsWith(".") ? subText.slice(0, -1) : subText;
  const withElipsis =`${textWithoutDot}...`;

  return withElipsis;
};
