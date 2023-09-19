import { groupsColors } from "./groupColors";
import { IndexesGroupsNames } from "./indexesGroupNames";
import { ParametersMap } from "./parametersData";

type TranslationKeyType = {
  translationPath: string
};

export type CardDataType = {
  groupName: IndexesGroupsNames,
  iconName: string,
  cardColor: string
  heading: TranslationKeyType,
  subheading: TranslationKeyType,
  tip: TranslationKeyType,
  text: TranslationKeyType,
};

export const cardsConfigForAirQuality: CardDataType[] = [
  {
    groupName: IndexesGroupsNames.GREEN,
    iconName: "harm-slightly-smiling-face",
    cardColor: groupsColors[IndexesGroupsNames.GREEN],
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
    cardColor: groupsColors[IndexesGroupsNames.YELLOW],
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
    cardColor: groupsColors[IndexesGroupsNames.ORANGE],
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
    cardColor: groupsColors[IndexesGroupsNames.LIGHT_RED],
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
    cardColor: groupsColors[IndexesGroupsNames.RED],
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
    cardColor: groupsColors[IndexesGroupsNames.PURPLE],
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

export const cardsConfigForAirPressure: CardDataType[] = [
  {
    groupName: IndexesGroupsNames.BLUE,
    cardColor: groupsColors[IndexesGroupsNames.BLUE],
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
    cardColor: groupsColors[IndexesGroupsNames.GREEN],
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
    cardColor: groupsColors[IndexesGroupsNames.RED],
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

export const cardsConfigForHumidity: CardDataType[] = [
  {
    groupName: IndexesGroupsNames.RED,
    cardColor: groupsColors[IndexesGroupsNames.RED],
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
    cardColor: groupsColors[IndexesGroupsNames.GREEN],
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
    cardColor: groupsColors[IndexesGroupsNames.BLUE],
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

export const cardsConfig: Record<ParametersMap, CardDataType[]> = {
  [ParametersMap.AIR_QUALITY]: cardsConfigForAirQuality.map(config => ({ ...config, parameter: ParametersMap.AIR_QUALITY })),
  [ParametersMap.PRESSURE]: cardsConfigForAirPressure.map(config => ({ ...config, parameter: ParametersMap.PRESSURE })),
  [ParametersMap.HUMIDITY]: cardsConfigForHumidity.map(config => ({ ...config, parameter: ParametersMap.HUMIDITY }))
};
