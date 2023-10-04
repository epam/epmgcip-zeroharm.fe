import { FC } from "react";
import { MenuButton, Icon, HStack, Text } from "@chakra-ui/react";
import { useDetectPage } from "@Hooks";
import { BackwardSign } from "../MenuCommonComponents/BackwardSign";
import { ReactComponent as ArrowDownIcon } from "@Assets/icons/stroke/harm-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@Assets/icons/stroke/harm-arrow-up.svg";
import { ReactComponent as MapPointIcon } from "@Assets/icons/stroke/harm-local-two.svg";

type LocationMenuButtonProps = {
  hasLocationOptions: boolean;
  locationName: string;
  isOpenOnMobile: boolean;
  isOpen: boolean;
};

export const LocationMenuButton: FC<LocationMenuButtonProps> = ({ hasLocationOptions, locationName, isOpenOnMobile, isOpen }) => {
  const { isMainPage } = useDetectPage();

  return (
    <MenuButton w="100%">
      <HStack
        spacing="12px"
        h={{ base: "44px", md: isMainPage ? "56px" : "44px", lg: "56px" }}
        p={{ base: "10px 12px", md: isMainPage ? "16px" : "10px 12px", lg: "16px" }}
        boxShadow="primary"
      >
        { isOpenOnMobile && <BackwardSign /> }
        <Icon
          as={MapPointIcon}
          boxSize={{ base: "16px", md: isMainPage ? "20px" : "16px", lg: "20px" }}
          color="menu.locationButtonIcon"
        />
        <Text
          noOfLines={1}
          textAlign="left"
          wordBreak="break-all"
        >
          { locationName }
        </Text>
        {
          hasLocationOptions && (
            <Icon
              as={isOpen ? ArrowUpIcon : ArrowDownIcon}
              width={{ base: "16px", md: isMainPage ? "24px" : "16px", lg: "24px" }}
              color="menu.locationButtonIcon"
              ml="auto"
            />
          )
        }
      </HStack>
    </MenuButton>
  );
};
