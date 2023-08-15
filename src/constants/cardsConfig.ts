import { indexesGroupsNames } from "./indexesGroupNames";
import { groupsColors, GroupsColorsKeyType } from "./groupColors";

const { GREEN, YELLOW, ORANGE, LIGHT_RED, RED, PURPLE, BLUE } = indexesGroupsNames;

type TranslationKeyType = {
  translationPath: string
};

export type CardDataType = {
  groupName: string,
  iconName: string,
  cardColor: GroupsColorsKeyType
  heading: TranslationKeyType,
  subheading: TranslationKeyType,
  tip: TranslationKeyType,
  text: TranslationKeyType,
};

export const cardsConfigForAirQuality: CardDataType[] = [
  {
    groupName: GREEN,
    iconName: "harm-slightly-smiling-face",
    cardColor: groupsColors[GREEN],
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
    groupName: YELLOW,
    cardColor: groupsColors[YELLOW],
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
    groupName: ORANGE,
    cardColor: groupsColors[ORANGE],
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
    groupName: LIGHT_RED,
    cardColor: groupsColors[LIGHT_RED],
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
    groupName: RED,
    cardColor: groupsColors[RED],
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
    groupName: PURPLE,
    cardColor: groupsColors[PURPLE],
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
    groupName: BLUE,
    cardColor: groupsColors[BLUE],
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
    groupName: GREEN,
    cardColor: groupsColors[GREEN],
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
    groupName: RED,
    cardColor: groupsColors[RED],
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
    groupName: RED,
    cardColor: groupsColors[RED],
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
    groupName: GREEN,
    cardColor: groupsColors[GREEN],
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
    groupName: BLUE,
    cardColor: groupsColors[BLUE],
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

export const cardsConfig = {
  air_quality: cardsConfigForAirQuality.map(config => ({ ...config, parameter: "air_quality" })),
  pressure: cardsConfigForAirPressure.map(config => ({ ...config, parameter: "pressure" })),
  humidity: cardsConfigForHumidity.map(config => ({ ...config, parameter: "humidity"}))
};
