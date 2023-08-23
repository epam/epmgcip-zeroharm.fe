import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../foundations/colors";

export const Switch = defineStyleConfig({
  variants: {
    default: {
      track: {
        bg: colors.whiteWithOpacity[20],
        h: "20px",
        w: "42px",
        _checked: {
          bg: colors.whiteWithOpacity[20]
        }
      },
      thumb: {
        bg: colors.gray[0],
        w: "20px",
        h: "20px"
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
