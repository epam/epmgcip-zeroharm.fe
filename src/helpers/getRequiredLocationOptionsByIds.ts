import { Location, LocationRawData } from "@Constants";
import { resolveTranslationPath } from "@Helpers";

export const getRequiredLocationOptionsByIds = (locationRawData: LocationRawData[], requiredLocationIds: string[]): Location[] => {
    const existingLocations: Location[] = locationRawData.map((locationData: LocationRawData) => resolveTranslationPath(locationData));

    return existingLocations.filter((option: Location) => requiredLocationIds.includes(option.locationId));
};
