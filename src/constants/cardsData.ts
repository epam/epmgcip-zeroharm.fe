import { IndexesGroupsNames, indexGroupColorsMap } from "./parameterIndexGroupData";
import { type Parameter, ParametersMap } from "./parametersData";

type TranslationKeyType = {
  translationPath: string
};

export type CardRawData = {
  groupName: IndexesGroupsNames;
  iconName: string;
  cardColor: string;
  heading: TranslationKeyType;
  subheading: TranslationKeyType;
  tip: TranslationKeyType;
  text: TranslationKeyType;
};

export type ParameterCardRawData = CardRawData & { parameter: Parameter }

export type CardData = {
  groupName: IndexesGroupsNames;
  iconName: string;
  cardColor: string;
  heading: string;
  subheading: string;
  tip: string;
  text: string;
  parameter: Parameter;
};

export const cardsRawDataForAirQuality: CardRawData[] = [
  {
    groupName: IndexesGroupsNames.GREEN,
    iconName: "harm-slightly-smiling-face",
    cardColor: indexGroupColorsMap[IndexesGroupsNames.GREEN],
    tip: {
      translationPath: "tips.air_quality"
    },
    heading: {
      translationPath: "cards.air_quality.0.title"
    },
    subheading: {
      translationPath: "cards.air_quality.0.subtitle"
    },
    text: {
      translationPath: "cards.air_quality.0.text"
    }
  },
  {
    groupName: IndexesGroupsNames.YELLOW,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.YELLOW],
    iconName: "harm-neutral-face",
    tip: {
      translationPath: "tips.air_quality"
    },
    heading: {
      translationPath: "cards.air_quality.1.title"
    },
    subheading: {
      translationPath: "cards.air_quality.1.subtitle"
    },
    text: {
      translationPath: "cards.air_quality.1.text"
    }
  },
  {
    groupName: IndexesGroupsNames.ORANGE,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.ORANGE],
    iconName: "harm-worried-face",
    tip: {
      translationPath: "tips.air_quality"
    },
    heading: {
      translationPath: "cards.air_quality.2.title"
    },
    subheading: {
      translationPath: "cards.air_quality.2.subtitle"
    },
    text: {
      translationPath: "cards.air_quality.2.text"
    }
  },
  {
    groupName: IndexesGroupsNames.LIGHT_RED,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.LIGHT_RED],
    iconName: "harm-more-worried-face",
    tip: {
      translationPath: "tips.air_quality"
    },
    heading: {
      translationPath: "cards.air_quality.3.title"
    },
    subheading: {
      translationPath: "cards.air_quality.3.subtitle"
    },
    text: {
      translationPath: "cards.air_quality.3.text"
    }
  },
  {
    groupName: IndexesGroupsNames.RED,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.RED],
    iconName: "harm-disappointed-face",
    tip: {
      translationPath: "tips.air_quality"
    },
    heading: {
      translationPath: "cards.air_quality.4.title"
    },
    subheading: {
      translationPath: "cards.air_quality.4.subtitle"
    },
    text: {
      translationPath: "cards.air_quality.4.text"
    }
  },
  {
    groupName: IndexesGroupsNames.PURPLE,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.PURPLE],
    iconName: "harm-loudly-crying-face",
    tip: {
      translationPath: "tips.air_quality"
    },
    heading: {
      translationPath: "cards.air_quality.5.title"
    },
    subheading: {
      translationPath: "cards.air_quality.5.subtitle"
    },
    text: {
      translationPath: "cards.air_quality.5.text"
    }
  }
];

export const cardsRawDataForAirPressure: CardRawData[] = [
  {
    groupName: IndexesGroupsNames.BLUE,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.BLUE],
    iconName: "harm-disappointed-face",
    tip: {
      translationPath: "tips.pressure"
    },
    heading: {
      translationPath: "cards.pressure.0.title"
    },
    subheading: {
      translationPath: "cards.pressure.0.subtitle"
    },
    text: {
      translationPath: "cards.pressure.0.text"
    }
  },
  {
    groupName: IndexesGroupsNames.GREEN,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.GREEN],
    iconName: "harm-slightly-smiling-face",
    tip: {
      translationPath: "tips.pressure"
    },
    heading: {
      translationPath: "cards.pressure.1.title"
    },
    subheading: {
      translationPath: "cards.pressure.1.subtitle"
    },
    text: {
      translationPath: "cards.pressure.1.text"
    }
  },
  {
    groupName: IndexesGroupsNames.RED,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.RED],
    iconName: "harm-worried-face",
    tip: {
      translationPath: "tips.pressure"
    },
    heading: {
      translationPath: "cards.pressure.2.title"
    },
    subheading: {
      translationPath: "cards.pressure.2.subtitle"
    },
    text: {
      translationPath: "cards.pressure.2.text"
    }
  }
];

export const cardsRawDataForHumidity: CardRawData[] = [
  {
    groupName: IndexesGroupsNames.RED,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.RED],
    iconName: "harm-disappointed-face",
    tip: {
      translationPath: "tips.humidity"
    },
    heading: {
      translationPath: "cards.humidity.2.title"
    },
    subheading: {
      translationPath: "cards.humidity.2.subtitle"
    },
    text: {
      translationPath: "cards.humidity.2.text"
    }
  },
  {
    groupName: IndexesGroupsNames.GREEN,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.GREEN],
    iconName: "harm-slightly-smiling-face",
    tip: {
      translationPath: "tips.humidity"
    },
    heading: {
      translationPath: "cards.humidity.1.title"
    },
    subheading: {
      translationPath: "cards.humidity.1.subtitle"
    },
    text: {
      translationPath: "cards.humidity.1.text"
    }
  },
  {
    groupName: IndexesGroupsNames.BLUE,
    cardColor: indexGroupColorsMap[IndexesGroupsNames.BLUE],
    iconName: "harm-neutral-face",
    tip: {
      translationPath: "tips.humidity"
    },
    heading: {
      translationPath: "cards.humidity.0.title"
    },
    subheading: {
      translationPath: "cards.humidity.0.subtitle"
    },
    text: {
      translationPath: "cards.humidity.0.text"
    }
  }
];

export const parametersCardsRawData: Record<Parameter, ParameterCardRawData[]> = {
  air_quality: cardsRawDataForAirQuality.map(rawData => ({ ...rawData, parameter: ParametersMap.AIR_QUALITY })),
  pressure: cardsRawDataForAirPressure.map(rawData => ({ ...rawData, parameter: ParametersMap.PRESSURE })),
  humidity: cardsRawDataForHumidity.map(rawData => ({ ...rawData, parameter: ParametersMap.HUMIDITY }))
};
