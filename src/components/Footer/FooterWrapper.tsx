import { FC, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type FooterWrapperProps = {
  children: ReactNode;
  isCardVariant: boolean;
}

export const FooterWrapper: FC<FooterWrapperProps> = ({ children, isCardVariant }) => {

  return (
    <Flex
      flex="1"
      w="100%"
      px={{ base: "16px", lg: "24px" }}
      py={{ base: "16px", md: "0px" }}
      align="center"
      alignSelf="center"
      justify="space-between"
      maxWidth={isCardVariant ? "none" : "var(--maxContentWidth)"}
    >
      { children }
    </Flex>
  );
};
