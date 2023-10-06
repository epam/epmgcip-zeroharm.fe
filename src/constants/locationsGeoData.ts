export type LocationRawData = {
  stationId: number | null;
  latitude: number;
  longitude: number;
  address: {
    translationPath: string;
  }
}

export type LocationData = Omit<LocationRawData, "address"> & {
  address: string;
}

const UzbekistanLocations = {
  Bukhara: "bukhara",
  Jizzakh: "jizzakh",
  Navoiy: "navoiy",
  Nukus: "nukus",
  Samarqand: "samarqand",
  Tashkent: "tashkent",
  Termez: "termez",
  Urgench: "urgench"
};

type Location = keyof typeof UzbekistanLocations;

const uzbekistanMainTranslationPath = "locations.uzbekistan.";
const { Bukhara, Jizzakh, Navoiy, Nukus, Samarqand, Tashkent, Termez, Urgench } = UzbekistanLocations;

const uzbekistanLocationsData: Record<Location, LocationRawData[]> = {
  Bukhara: [
    {
      stationId: null,
      latitude: 39.760278,
      longitude: 64.433204,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Bukhara}.1`
      }
    },
    {
      stationId: null,
      latitude: 39.775941,
      longitude: 64.431379,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Bukhara}.2`
      }
    },
    {
      stationId: null,
      latitude: 39.766192,
      longitude: 64.419429,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Bukhara}.3`
      }
    }
  ],
  Jizzakh: [
    {
      stationId: null,
      latitude: 40.169166,
      longitude: 67.835548,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Jizzakh}.1`
      }
    }
  ],
  Navoiy: [
    {
      stationId: null,
      latitude: 40.0952857,
      longitude: 65.3799896,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Navoiy}.1`
      }
    },
    {
      stationId: null,
      latitude: 40.100823,
      longitude: 65.367982,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Navoiy}.2`
      }
    },
    {
      stationId: null,
      latitude: 40.117753,
      longitude: 65.374431,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Navoiy}.3`
      }
    }
  ],
  Nukus: [
    {
      stationId: null,
      latitude: 42.448653,
      longitude: 59.640239,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Nukus}.1`
      }
    },
    {
      stationId: null,
      latitude: 42.461166,
      longitude: 59.604854,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Nukus}.2`
      }
    },
    {
      stationId: null,
      latitude: 52.921296,
      longitude: 65.364043,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Nukus}.3`
      }
    }
  ],
  Samarqand: [
    {
      stationId: null,
      latitude: 39.642737,
      longitude: 66.961508,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Samarqand}.1`
      }
    },
    {
      stationId: null,
      latitude: 39.653036,
      longitude: 66.973132,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Samarqand}.2`
      }
    },
    {
      stationId: null,
      latitude: 39.667987,
      longitude: 66.971621,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Samarqand}.3`
      }
    },
    {
      stationId: null,
      latitude: 39.666760,
      longitude: 66.927593,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Samarqand}.4`
      }
    }
  ],
  Tashkent: [
    {
      stationId: 1,
      // TODO: change after providing correct latitude
      latitude: 41.31286390094148,
      // TODO: change after providing correct longitude
      longitude: 69.24438328843463,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.1`
      }
    },
    {
      stationId: null,
      latitude: 41.3270815,
      longitude: 69.2893541,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.2`
      }
    },
    {
      stationId: null,
      latitude: 41.2830467,
      longitude: 69.2196999,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.3`
      }
    },
    {
      stationId: null,
      latitude: 41.271171,
      longitude: 69.1728336,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.4`
      }
    },
    {
      stationId: null,
      latitude: 41.317504,
      longitude: 69.295374,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.5`
      }
    },
    {
      stationId: null,
      latitude: 41.3039969,
      longitude: 69.3003051,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.6`
      }
    },
    {
      stationId: null,
      latitude: 41.278180,
      longitude: 69.302979,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.7`
      }
    },
    {
      stationId: null,
      latitude: 41.281415,
      longitude: 69.339556,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.8`
      }
    },
    {
      stationId: null,
      latitude: 41.318725,
      longitude: 69.283987,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.9`
      }
    },
    {
      stationId: null,
      // TODO: change after providing latitude
      latitude: 0,
      // TODO: change after providing longitude
      longitude: 0,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.10`
      }
    },
    {
      stationId: null,
      latitude: 41.355456,
      longitude: 69.247434,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Tashkent}.11`
      }
    }
  ],
  Termez: [
    {
      stationId: null,
      latitude: 37.238986,
      longitude: 67.245023,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Termez}.1`
      }
    },
    {
      stationId: null,
      latitude: 37.280911,
      longitude: 67.318857,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Termez}.2`
      }
    }
  ],
  Urgench: [
    {
      stationId: null,
      latitude: 41.560607,
      longitude: 60.611794,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Urgench}.1`
      }
    },
    {
      stationId: null,
      latitude: 41.543021,
      longitude: 60.638440,
      address: {
        translationPath: `${uzbekistanMainTranslationPath}${Urgench}.2`
      }
    }
  ]
};

export const locationsGeoData = [...Object.keys(uzbekistanLocationsData)]
  .sort()
  .map((key) => uzbekistanLocationsData[key as Location])
  .flatMap((st) => st);
