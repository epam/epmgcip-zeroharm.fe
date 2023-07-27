import { indexesGroupsNames } from "./indexesGroupNames";

const { GREEN, YELLOW, ORANGE, LIGHT_RED, RED, PURPLE, BLUE } = indexesGroupsNames;

export const airQualityIndexConfig = [
  {
    groupName: GREEN,
    titleTranslationPath: "cards.air_quality.0.title",
    range: {
      min: 0,
      max: 50,
    }
  },
  {
    groupName: YELLOW,
    titleTranslationPath: "cards.air_quality.1.title",
    range: {
      min: 51,
      max: 100,
    }
  },
  {
    groupName: ORANGE,
    titleTranslationPath: "cards.air_quality.2.title",
    range: {
      min: 101,
      max: 150,
    }
  },
  {
    groupName: LIGHT_RED,
    titleTranslationPath: "cards.air_quality.3.title",
    range: {
      min: 151,
      max: 300,
    }
  },
  {
    groupName: RED,
    titleTranslationPath: "cards.air_quality.4.title",
    range: {
      min: 301,
      max: 400,
    }
  },
  {
    groupName: PURPLE,
    titleTranslationPath: "cards.air_quality.5.title",
    range: {
      min: 401,
      max: 500,
    }
  },
];

export const airPressureIndexConfig = [
  {
    groupName: BLUE,
    titleTranslationPath: "cards.pressure.0.title",
    range: {
      min: 669,
      max: 754
    }
  },
  {
    groupName: GREEN,
    titleTranslationPath: "cards.pressure.1.title",
    range: {
      min: 755,
      max: 765
    }
  },
  {
    groupName: RED,
    titleTranslationPath: "cards.pressure.2.title",
    range: {
      min: 766,
      max: 812
    }
  }
];

export const humidityIndexConfig = [
  {
    groupName: RED,
    titleTranslationPath: "cards.humidity.2.title",
    range: {
      min: 0,
      max: 39
    }
  },
  {
    groupName: GREEN,
    titleTranslationPath: "cards.humidity.1.title",
    range: {
      min: 40,
      max: 70
    }
  },
  {
    groupName: BLUE,
    titleTranslationPath: "cards.humidity.0.title",
    range: {
      min: 71,
      max: 100
    }
  },
];

export const indexesConfig = {
  air_quality: airQualityIndexConfig,
  pressure: airPressureIndexConfig,
  humidity: humidityIndexConfig
};
