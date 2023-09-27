import { FC } from "react";
import { MenuList } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import { Location } from "@Constants";
import { LocationMenuItem } from "./LocationMenuItem";

type LocationMenuListProps = {
  locationsOptions: Location[];
  isOpenOnMobile: boolean;
  isOpen: boolean;
}

const motionVariants: Variants = {
  enter: {
    transform: "scale(1, 1)",
    opacity: 1,
    visibility: "visible",
    transition: {
      opacity: {
        delay: 0.1,
        duration: 0.2
      },
      transform: {
        duration: 0.3
      }
    }
  },
  exit: {
    transform: "scale(1, 0)",
    opacity: 0,
    transition: {
      transform: {
        duration: 0.3
      },
      opacity: {
        delay: 0.1,
        duration: 0.2
      }
    },
    transitionEnd: {
      visibility: "hidden"
    }
  }
};

export const LocationMenuList: FC<LocationMenuListProps> = ({ locationsOptions, isOpenOnMobile, isOpen }) => {
  return (
    <MenuList
      w={{ base: "100vw", md: "472px", lg: "613px" }}
      maxH={{ md: "210px" }}
      zIndex="2"
      py={{ base: "0", md: "8px" }}
      minH={isOpenOnMobile ? "calc(100vh - var(--headerMobileHeight))" : "initial"}
      rootProps={{
        sx: isOpenOnMobile ? { transform: "translate3d(0, var(--headerMobileHeight), 0) !important" } : undefined
      }}
      motionProps={{
        variants: motionVariants,
        animate: isOpen ? "enter" : "exit"
      }}
    >
      {
        locationsOptions.map((locationOption) => (
          <LocationMenuItem
            key={locationOption.locationId}
            locationOption={locationOption}
          />
        ))
      }
    </MenuList>
  );
};
