export const getSubString = (str: string, symbolsAmount?: number) => {
  if (symbolsAmount) {
    return `${str.slice(0, symbolsAmount)}`;
  }

  return str.slice(0, str.indexOf(".") + 1);
};
