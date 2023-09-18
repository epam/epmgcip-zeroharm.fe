import { FC, ReactNode } from "react";
import { VStack } from "@chakra-ui/react";

type TextSectionProps = {
  heading: ReactNode;
  children: ReactNode;
}

export const TextSection: FC<TextSectionProps> = ({ heading, children }) => (
  <VStack
    as="section"
    align="flex-start"
    gap={{ base: "16px", lg: "24px" }}
  >
    { heading }
    <VStack
      align="flex-start"
      gap="24px"
    >
      { children }
    </VStack>
  </VStack>
);
