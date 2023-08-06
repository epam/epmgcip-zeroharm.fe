import { defineStyleConfig } from "@chakra-ui/react";

const buttonDefaultStyles = {
  bg: "white",
  p: "16px",
  color: "gray.950",
  borderRadius: "8px"
};

const buttonDefaultStyles__hover = {
  bg: "gray.200"
};

const buttonDefaultStyles__active = {
  bg: "gray.200"
};

const buttonDefaultStyles__disabled = {
  bg: "gray.700",
  color: "gray.500"
};

export const Button = defineStyleConfig({
  variants: {
    default: {
      ...buttonDefaultStyles,
      _hover: { ...buttonDefaultStyles__hover },
      _active: { ...buttonDefaultStyles__active },
      _disabled: {
        ...buttonDefaultStyles__disabled,
        _hover: {
          ...buttonDefaultStyles__disabled
        }
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
