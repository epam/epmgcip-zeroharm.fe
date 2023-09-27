import { FC } from "react";
import { MenuButton, Icon, HStack, Text, Center } from "@chakra-ui/react";
import { useDetectPage } from "@Hooks";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";
import { ReactComponent as ArrowDownIcon } from "@Assets/icons/stroke/harm-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "@Assets/icons/stroke/harm-arrow-up.svg";
import { ReactComponent as MapPointIcon } from "@Assets/icons/stroke/harm-local-two.svg";

type LocationMenuButtonProps = {
  locationName: string;
  isOpenOnMobile: boolean;
  isOpen: boolean;
};

export const LocationMenuButton: FC<LocationMenuButtonProps> = ({ locationName, isOpenOnMobile, isOpen }) => {
  const { isMainPage } = useDetectPage();

  return (
    <MenuButton w="100%">
      <HStack
        spacing="12px"
        h={{ base: "44px", md: isMainPage ? "56px" : "44px", lg: "56px" }}
        p={{ base: "10px 12px", md: isMainPage ? "16px" : "10px 12px", lg: "16px" }}
      >
        {
          isOpenOnMobile && (
            <Center
              zIndex="1300"
              pos="fixed"
              top="0"
              left="0"
              bgColor="secondaryBgColor"
              h="var(--headerMobileHeight)"
              w="var(--headerMobileHeight)"
            >
              <LeftArrowIcon width="20px" />
            </Center>
          )
        }
        <Icon
          as={MapPointIcon}
          boxSize={{ base: "16px", md: isMainPage ? "20px" : "16px", lg: "20px" }}
          color="menu.locationButtonIcon"
        />
        <Text noOfLines={1}>
          { locationName }
        </Text>
        <Icon
          as={isOpen ? ArrowUpIcon : ArrowDownIcon}
          width={{ base: "16px", md: isMainPage ? "24px" : "16px", lg: "24px" }}
          color="menu.locationButtonIcon"
          ml="auto"
        />
      </HStack>
    </MenuButton>
  );
};
