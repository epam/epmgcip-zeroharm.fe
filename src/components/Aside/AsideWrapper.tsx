import { FC, ReactNode } from "react";
import { VStack } from "@chakra-ui/react";

type AsideWrapperProps = {
  children: ReactNode;
  isContentOverflowing: boolean;
}

export const AsideWrapper: FC<AsideWrapperProps> = ({ children, isContentOverflowing }) => {
  const offset = isContentOverflowing ? "20px" : "0px";

  return (
    <VStack
      as="aside"
      height="100%"
      w="100%"
      maxW={{
        base: "599px",
        md: "359px",
        lg: `calc(440px + ${offset})`
      }}
      overflow="hidden"
      pt={{ base: "8px", md: "16px" }}
      gap="16px"
      transition={{ base: "none", lg: "max-width .3s ease"}}
    >
      { children }
    </VStack>
  );
};
