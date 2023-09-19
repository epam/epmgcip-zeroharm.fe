import { FC, useState, useEffect } from "react";
import { Menu, MenuList, MenuItem, useDisclosure } from "@chakra-ui/react";
import { useDetectWidth } from "@Hooks";
import { getRequiredLocationOptionsByIds } from "@Helpers";
import { Location } from "@Types";
import { locationsData } from "@Constants";
import { LocationMenuButtonContent } from "./LocationMenuButtonContent";

const DEFAULT_LOCATIONID = "tash_furkata";

export const LocationMenu: FC = () => {
    const requiredLocationOptions = getRequiredLocationOptionsByIds(locationsData, [DEFAULT_LOCATIONID]);
    const defaultAddress = requiredLocationOptions.find(({ locationId }) => locationId === DEFAULT_LOCATIONID) as Location;

    const [selectedLocation, setSelectedLocation] = useState<Location>(defaultAddress);
    const [shouldShowAdditionalMenuContent, setShouldShowAdditionalMenuContent] = useState<boolean>(false);

    const handleLocationChange = (location: Location) => {
        setSelectedLocation(location);
    };

    useEffect(() => {
        if(requiredLocationOptions.length > 1) setShouldShowAdditionalMenuContent(true);
    }, []);

    useEffect(() => {
        if(defaultAddress) setSelectedLocation(defaultAddress);
    }, [JSON.stringify(defaultAddress)]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { isLargerThan600 } = useDetectWidth();
    const isMobileWidth = !isLargerThan600;

    return (
        <Menu
            autoSelect={false}
            closeOnBlur={!isMobileWidth}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
        >
            <LocationMenuButtonContent
                locationAddress={selectedLocation.locationName}
                shouldShowArrowIcons={shouldShowAdditionalMenuContent}
                isMenuListOpen={isOpen}
                isMobileWidth={isMobileWidth}
            />
            { /* TODO: style MenuList and its items properly when more locations and mockups will be ready */ }
            { shouldShowAdditionalMenuContent && <MenuList>
                { requiredLocationOptions.map((location) => (
                    <MenuItem
                        key={location?.locationId}
                        onClick={() => handleLocationChange(location)}
                    >
                        { location?.locationName }
                    </MenuItem>
                )) }
            </MenuList> }
        </Menu>
    );
};
