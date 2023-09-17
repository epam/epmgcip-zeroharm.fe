import { FC, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { useDetectPage } from "@Hooks";

type FooterWrapperProps = {
  children: ReactNode;
  isCardVariant: boolean;
}

export const FooterWrapper: FC<FooterWrapperProps> = ({ children, isCardVariant }) => {
  const { isMapPage } = useDetectPage();

  return (
    <Flex
      flex="1"
      w="100%"
      px={{ base: "16px", lg: "24px" }}
      py={{ base: "16px", lg: isMapPage ? "8px" : "16px" }}
      align="center"
      alignSelf="center"
      justify="space-between"
      maxWidth={isCardVariant ? "none" : "var(--maxContentWidth)"}
    >
      { children }
    </Flex>
  );
};
