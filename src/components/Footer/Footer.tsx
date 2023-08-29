import { FC } from "react";
import { Box, Divider } from "@chakra-ui/react";
import { FooterContent } from "@Components";

export const Footer: FC = () => {
  return (
    <Box
      as="footer"
      bottom="0"
      pos="fixed"
    >
      <Divider variant="positioned" />
      <FooterContent />
    </Box>
  );
};
