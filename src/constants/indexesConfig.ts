import { indexesGroupsNames } from "./indexesGroupNames";

const { GREEN, YELLOW, ORANGE, LIGHT_RED, RED, PURPLE, BLUE } = indexesGroupsNames;

export const airQualityIndexConfig = [
  {
    groupName: GREEN,
    range: {
      min: 0,
      max: 50,
    },
    icon: "harm-slightly-smiling-face",
    headingTranslationPath: "cards.air_quality.0.title",
    questionTranslationPath: "cards.air_quality.0.subtitle",
    textTranslationPath: "cards.air_quality.0.text"
  },
  {
    groupName: YELLOW,
    range: {
      min: 51,
      max: 100,
    },
    icon: "harm-neutral-face",
    headingTranslationPath: "cards.air_quality.1.title",
    questionTranslationPath: "cards.air_quality.1.subtitle",
    textTranslationPath: "cards.air_quality.1.text"
  },
  {
    groupName: ORANGE,
    range: {
      min: 101,
      max: 150,
    },
    icon: "harm-worried-face",
    headingTranslationPath: "cards.air_quality.2.title",
    questionTranslationPath: "cards.air_quality.2.subtitle",
    textTranslationPath: "cards.air_quality.2.text"
  },
  {
    groupName: LIGHT_RED,
    range: {
      min: 151,
      max: 300,
    },
    icon: "harm-more-worried-face",
    headingTranslationPath: "cards.air_quality.3.title",
    questionTranslationPath: "cards.air_quality.3.subtitle",
    textTranslationPath: "cards.air_quality.3.text"
  },
  {
    groupName: RED,
    range: {
      min: 301,
      max: 400,
    },
    icon: "harm-disappointed-face",
    headingTranslationPath: "cards.air_quality.4.title",
    questionTranslationPath: "cards.air_quality.4.subtitle",
    textTranslationPath: "cards.air_quality.4.text"
  },
  {
    groupName: PURPLE,
    range: {
      min: 401,
      max: 500,
    },
    icon: "harm-loudly-crying-face",
    headingTranslationPath: "cards.air_quality.5.title",
    questionTranslationPath: "cards.air_quality.5.subtitle",
    textTranslationPath: "cards.air_quality.5.text"
  },
];

export const airPressureIndexConfig = [
  {
    groupName: BLUE,
    range: {
      min: 669,
      max: 754
    },
    icon: "harm-disappointed-face",
    headingTranslationPath: "cards.pressure.0.title",
    questionTranslationPath: "cards.pressure.0.subtitle",
    textTranslationPath: "cards.pressure.0.text"
  },
  {
    groupName: GREEN,
    range: {
      min: 755,
      max: 765
    },
    icon: "harm-slightly-smiling-face",
    headingTranslationPath: "cards.pressure.1.title",
    questionTranslationPath: "cards.pressure.1.subtitle",
    textTranslationPath: "cards.pressure.1.text"
  },
  {
    groupName: RED,
    range: {
      min: 766,
      max: 812
    },
    icon: "harm-worried-face",
    headingTranslationPath: "cards.pressure.2.title",
    questionTranslationPath: "cards.pressure.2.subtitle",
    textTranslationPath: "cards.pressure.2.text"
  }
];

export const humidityIndexConfig = [
  {
    groupName: RED,
    range: {
      min: 0,
      max: 39
    },
    icon: "harm-disappointed-face ",
    headingTranslationPath: "cards.humidity.2.title",
    questionTranslationPath: "cards.humidity.2.subtitle",
    textTranslationPath: "cards.humidity.2.text"
  },
  {
    groupName: GREEN,
    range: {
      min: 40,
      max: 70
    },
    icon: "harm-slightly-smiling-face",
    headingTranslationPath: "cards.humidity.1.title",
    questionTranslationPath: "cards.humidity.1.subtitle",
    textTranslationPath: "cards.humidity.1.text"
  },
  {
    groupName: BLUE,
    range: {
      min: 71,
      max: 100
    },
    icon: "harm-neutral-face",
    headingTranslationPath: "cards.humidity.0.title",
    questionTranslationPath: "cards.humidity.0.subtitle",
    textTranslationPath: "cards.humidity.0.text"
  },
];

export const indexesConfig = {
  air_quality: airQualityIndexConfig,
  pressure: airPressureIndexConfig,
  humidity: humidityIndexConfig
};
