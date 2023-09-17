import { Box, chakra } from "@chakra-ui/react";

export const CardStep = chakra(Box, {
  baseStyle: {
    fontSize: "tiny",
    lineHeight: "16px",
    position: "absolute",
    top: "24px",
    right: "24px",
    zIndex: "100"
  }
});
