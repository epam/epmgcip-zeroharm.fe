export type Location = {
  locationId: string;
  locationName: string;
}

export type LocationRawData = {
  locationId: string;
  locationName: {
    translationPath: string;
  };
};

export const DEFAULT_LOCATION_ID = "tash_furkata";

export const locationsData: LocationRawData[] = [
  {
    locationId: "tash_furkata",
    locationName: {
      translationPath: "locations.tash_furkata"
    }
  },
  {
    locationId: "tash_navoi",
    locationName: {
      translationPath: "locations.tash_navoi"
    }
  },
  {
    locationId: "tash_skrajna",
    locationName: {
      translationPath: "locations.tash_skrajna"
    }
  },
  {
    locationId: "tash_mlynarska",
    locationName: {
      translationPath: "locations.tash_mlynarska"
    }
  },
  {
    locationId: "tash_szajnochy",
    locationName: {
      translationPath: "locations.tash_szajnochy"
    }
  }
];
