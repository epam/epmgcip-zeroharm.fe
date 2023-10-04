import { FC } from "react";
import { MenuItem, Text } from "@chakra-ui/react";
import { Location } from "@Constants";
import { useDataStore } from "@Store/useDataStore";

type LocationMenuItemProps = {
  locationOption: Location;
}

export const LocationMenuItem: FC<LocationMenuItemProps> = ({ locationOption }) => {
  const { locationId, setLocationId } = useDataStore();

  return (
    <MenuItem
      as="li"
      onClick={() => setLocationId(locationOption.locationId)}
      aria-selected={locationId === locationOption.locationId}
      h={{ base: "72px", md: "48px" }}
    >
      <Text noOfLines={{ base: 2, md: 1 }}>
        { locationOption.locationName }
      </Text>
    </MenuItem>
  );
};
