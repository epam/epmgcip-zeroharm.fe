import { getSubString } from "./getSubString";

export const getCutText = (text: string, lettersLimit: number) => {
  if (text.length > lettersLimit) {
    const subText = getSubString(text, lettersLimit);
    const textWithoutDot = subText.endsWith(".") ? subText.slice(0, -1) : subText;
    const withElipsis =`${textWithoutDot}...`;

    return {isTextCut: true, cutText: withElipsis};
  }

  return {isTextCut: false, cutText: text};
};
