import { FC } from "react";
import { Menu, useDisclosure, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useDetectWidth } from "@Hooks";
import { locationsData, type Location, DEFAULT_LOCATION_ID } from "@Constants";
import { useDataStore } from "@Store/useDataStore";
import { resolveTranslationPath } from "@Helpers";
import { LocationMenuButton } from "./LocationMenuButton";
import { LocationMenuList } from "./LocationMenuList";
import { MobileMenuHeadingTip } from "../MenuCommonComponents/MobileMenuHeadingTip";

export const LocationMenu: FC = () => {
  const { t } = useTranslation();
  const { locationId, availableLocationIds } = useDataStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLargerThan600 } = useDetectWidth();

  const isMobileWidth = !isLargerThan600;
  const isOpenOnMobile = isOpen && isMobileWidth;
  const hasLocationOptions = availableLocationIds.length > 1;

  const locationsOptions: Location[] = locationsData.map((locationData) => resolveTranslationPath(locationData));
  const currentLocationName = locationsOptions.find(
    (locationData) => locationData.locationId === locationId
  )?.locationName ?? t(DEFAULT_LOCATION_ID);

  return (
    <Menu
      variant="location"
      autoSelect={false}
      closeOnBlur={!isMobileWidth}
      isOpen={isOpen}
      onOpen={hasLocationOptions ? onOpen : undefined}
      onClose={onClose}
    >
      <LocationMenuButton
        hasLocationOptions={hasLocationOptions}
        locationName={currentLocationName}
        isOpenOnMobile={isOpenOnMobile}
        isOpen={isOpen}
      />
      {
        isOpenOnMobile && (
          <MobileMenuHeadingTip>
            <Text
              noOfLines={1}
              color="menu.locationTip"
            >
              { currentLocationName }
            </Text>
          </MobileMenuHeadingTip>
        )
      }
      <LocationMenuList
        locationsOptions={locationsOptions}
        isOpenOnMobile={isOpenOnMobile}
        isOpen={isOpen}
      />
    </Menu>
  );
};
