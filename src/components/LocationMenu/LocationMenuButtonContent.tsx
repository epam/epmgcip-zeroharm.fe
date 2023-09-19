import { FC } from "react";
import { MenuButton, Icon as ChakraIcon, HStack, Text } from "@chakra-ui/react";
import { ReactComponent as ArrowDownIcon } from "@Assets/icons/stroke/harm-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@Assets/icons/stroke/harm-arrow-up.svg";
import { ReactComponent as IconMapPoint } from "@Assets/icons/stroke/harm-local-two.svg";
import { LocationAddressTextInlineStyles, LocationMenuButtonInlineStyles, ArrowIconsInlineStyles, IconMapInlineStyles } from "./inlineStyles/DesktopInlineStylesConfig";
import { LocationMenuButtonMobileInlineStyles, IconMapInlineMobileStyles, LocationAddressTextMobileInlineStyles, ArrowIconsInlineMobileStyles } from "./inlineStyles/MobileInlineStylesConfig";

type LocationMenuButtonContentProps = {
    locationAddress: string;
    shouldShowArrowIcons: boolean;
    isMenuListOpen: boolean;
    isMobileWidth: boolean;
};

export const LocationMenuButtonContent: FC<LocationMenuButtonContentProps> = ({
    locationAddress,
    shouldShowArrowIcons,
    isMenuListOpen,
    isMobileWidth
}) => {
    const locationMenuButtonInlineStyles = isMobileWidth ? LocationMenuButtonMobileInlineStyles : LocationMenuButtonInlineStyles;
    const locationAddressTextInlineStyles = isMobileWidth ? LocationAddressTextMobileInlineStyles : LocationAddressTextInlineStyles;
    const arrowIconsInlineStyles = isMobileWidth ? ArrowIconsInlineMobileStyles : ArrowIconsInlineStyles;
    const iconMapInlineStyles = isMobileWidth ? IconMapInlineMobileStyles : IconMapInlineStyles;

    return (
        <MenuButton
                style={
                    {
                        ...locationMenuButtonInlineStyles,
                        pointerEvents: shouldShowArrowIcons ? "auto" : "none"
                    }
                }
            >
            <HStack spacing={isMobileWidth ? "4px" : "12px"}>
                <IconMapPoint
                    style={iconMapInlineStyles}
                />
                <Text
                    style={locationAddressTextInlineStyles}
                    display={{ lg: "initial" }}
                >
                    { locationAddress }
                </Text>
                { shouldShowArrowIcons && <ChakraIcon
                    as={isMenuListOpen ? ArrowUpIcon : ArrowDownIcon}
                    style={arrowIconsInlineStyles}
                /> }
            </HStack>
        </MenuButton>
    );
};
