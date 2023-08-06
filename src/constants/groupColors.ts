import { indexesGroupsNames } from "./indexesGroupNames";

const { GREEN, YELLOW, ORANGE, LIGHT_RED, RED, PURPLE, BLUE } = indexesGroupsNames;

export const groupsColors = {
  [GREEN]: "green",
  [YELLOW]: "yellow",
  [ORANGE]: "orange",
  [LIGHT_RED]: "red",
  [RED]: "ruby",
  [PURPLE]: "violet",
  [BLUE]: "blue"
};

export type GroupsColorsKeyType = keyof typeof groupsColors;
