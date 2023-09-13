/* eslint-disable no-unused-vars */
import { resolveTranslationPath } from "@Helpers";

const rootTranslationPath = "pages.about";
const UN_ECONOMIC_COMMISSION_LINK = "https://unece.org/ru/air-pollution-and-health";
const WORLD_HEALTH_ORGANIZATION_LINK = "https://unece.org/ru/air-pollution-and-health";

const paragraphsSubpaths: Record<number, string> = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six"
};

const enum MainPaths {
  INTRO = "intro",
  AIR_QUALITY = "air_quality",
  ULTRAVIOLET_RADIATION = "ultraviolet_radiation",
  ATMOSPHERIC_PRESSURE = "atmospheric_pressure",
  AMBIENT_NOISE = "ambient_noise",
  AIR_HUMIDITY = "air_humidity"
};

const subPathsTypes = {
  title: "title",
  paragraphs: "paragraphs"
};

const buildAboutPageTranslationPath = (mainPath: string, subPathIndex?: number) => {
  const baseTranslationPath = `${rootTranslationPath}.${mainPath}.`;

  let subTranslationPath = "";
  if (subPathIndex === undefined) {
    subTranslationPath = subPathsTypes.title;
  } else {
    subTranslationPath = `${subPathsTypes.paragraphs}.${paragraphsSubpaths[subPathIndex]}`;
  }

  return baseTranslationPath + subTranslationPath;
};

export type AboutPageRawData = {
  sectionId: MainPaths;
  sectionHeading: {
    tag: "h3" | "h2";
    headingContent: {
      translationPath: string;
    }
  };
  sectionParagraphs: {
    paragraphContent: {
      translationPath: string;
    };
    components?: {
      id: number;
      type: "strong" | "link" | "listItem",
      link?: string;
    }[]
  }[]
}

export type SectionHeadingData = {
  tag: "h3" | "h2";
  headingContent: string;
}

export type SectionComponent = {
  id: number;
  type: "strong" | "link" | "listItem",
  link?: string;
}

export type SectionParagraph = {
  paragraphContent: string
  components?: SectionComponent[];
}

export type AboutPageData = {
  sectionId: MainPaths;
  sectionHeading: SectionHeadingData;
  sectionParagraphs: SectionParagraph[];
}

export const aboutPageRawData: AboutPageRawData[] = [
  {
    sectionId: MainPaths.INTRO,
    sectionHeading: {
      tag: "h2",
      headingContent: {
        translationPath: buildAboutPageTranslationPath(MainPaths.INTRO)
      }
    },
    sectionParagraphs: [
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.INTRO, 1)
        },
        components: [
          {
            id: 1,
            type: "strong"
          }
        ]
      }
    ]
  },
  {
    sectionId: MainPaths.AIR_QUALITY,
    sectionHeading: {
      tag: "h3",
      headingContent: {
        translationPath: buildAboutPageTranslationPath(MainPaths.AIR_QUALITY)
      }
    },
    sectionParagraphs: [
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AIR_QUALITY, 1)
        },
        components: [
          {
            id: 1,
            type: "link",
            link: UN_ECONOMIC_COMMISSION_LINK
          }
        ]
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AIR_QUALITY, 2)
        },
        components: [
          {
            id: 1,
            type: "link",
            link: WORLD_HEALTH_ORGANIZATION_LINK
          }
        ]
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AIR_QUALITY, 3)
        }
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AIR_QUALITY, 4)
        }
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AIR_QUALITY, 5)
        },
        components: [
          {
            id: 1,
            type: "strong"
          }
        ]
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AIR_QUALITY, 6)
        }
      }
    ]
  },
  {
    sectionId: MainPaths.ULTRAVIOLET_RADIATION,
    sectionHeading: {
      tag: "h3",
      headingContent: {
        translationPath: buildAboutPageTranslationPath(MainPaths.ULTRAVIOLET_RADIATION)
      }
    },
    sectionParagraphs: [
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.ULTRAVIOLET_RADIATION, 1)
        },
        components: [
          {
            id: 1,
            type: "strong"
          }
        ]
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.ULTRAVIOLET_RADIATION, 2)
        },
        components: [
          {
            id: 1,
            type: "strong"
          }
        ]
      }
    ]
  },
  {
    sectionId: MainPaths.ATMOSPHERIC_PRESSURE,
    sectionHeading: {
      tag: "h3",
      headingContent: {
        translationPath: buildAboutPageTranslationPath(MainPaths.ATMOSPHERIC_PRESSURE)
      }
    },
    sectionParagraphs: [
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.ATMOSPHERIC_PRESSURE, 1)
        }
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.ATMOSPHERIC_PRESSURE, 2)
        }
      }
    ]
  },
  {
    sectionId: MainPaths.AMBIENT_NOISE,
    sectionHeading: {
      tag: "h3",
      headingContent: {
        translationPath: buildAboutPageTranslationPath(MainPaths.AMBIENT_NOISE)
      }
    },
    sectionParagraphs: [
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AMBIENT_NOISE, 1)
        }
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AMBIENT_NOISE, 2)
        }
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AMBIENT_NOISE, 3)
        }
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AMBIENT_NOISE, 4)
        }
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AMBIENT_NOISE, 5)
        }
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AMBIENT_NOISE, 6)
        }
      }
    ]
  },
  {
    sectionId: MainPaths.AIR_HUMIDITY,
    sectionHeading: {
      tag: "h3",
      headingContent: {
        translationPath: buildAboutPageTranslationPath(MainPaths.AIR_HUMIDITY)
      }
    },
    sectionParagraphs: [
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AIR_HUMIDITY, 1)
        }
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AIR_HUMIDITY, 2)
        },
        components: [
          {
            id: 1,
            type: "listItem"
          },
          {
            id: 2,
            type: "listItem"
          },
          {
            id: 3,
            type: "listItem"
          },
          {
            id: 4,
            type: "listItem"
          }
        ]
      },
      {
        paragraphContent: {
          translationPath: buildAboutPageTranslationPath(MainPaths.AIR_HUMIDITY, 3)
        }
      }
    ]
  }
];

