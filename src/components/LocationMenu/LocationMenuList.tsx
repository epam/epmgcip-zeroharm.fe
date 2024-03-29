import { FC } from "react";
import { MenuList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Location } from "@Constants";
import { menuListMotionVariants, menuListMotionVariantOptions, menuItemsMotionProps } from "@Theme/transitions/menuListMotionVariants";
import { LocationMenuItem } from "./LocationMenuItem";

type LocationMenuListProps = {
  locationsOptions: Location[];
  isOpenOnMobile: boolean;
  isOpen: boolean;
}

export const LocationMenuList: FC<LocationMenuListProps> = ({ locationsOptions, isOpenOnMobile, isOpen }) => {

  return (
    <MenuList
      w={{ base: "100vw", md: "472px", lg: "613px" }}
      maxH={{ md: "210px" }}
      zIndex="2"
      py={{ base: "0", md: "8px" }}
      boxShadow="primary"
      minH={isOpenOnMobile ? "calc(100vh - var(--headerMobileHeight))" : "initial"}
      rootProps={{
        sx: isOpenOnMobile ? { transform: "translate3d(0, var(--headerMobileHeight), 0) !important" } : undefined
      }}
      motionProps={{
        variants: menuListMotionVariants,
        animate: isOpen ? menuListMotionVariantOptions.ENTER : menuListMotionVariantOptions.EXIT
      }}
    >
      <motion.ul variants={menuItemsMotionProps}>
        {
          locationsOptions.map((locationOption) => (
            <LocationMenuItem
              key={locationOption.locationId}
              locationOption={locationOption}
            />
          ))
        }
      </motion.ul>
    </MenuList>
  );
};
