import { FC, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type WrapperType = {
  children: ReactNode;
};

export const IndicatorWrapper: FC<WrapperType> = ({ children }) => {
  return (
    <Flex
      direction="column"
      bg="indicator.bg"
      p="16px"
      borderRadius="8px"
      gap="16px"
    >
      { children }
    </Flex>
  );
};
