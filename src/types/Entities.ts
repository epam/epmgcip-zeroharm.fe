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
