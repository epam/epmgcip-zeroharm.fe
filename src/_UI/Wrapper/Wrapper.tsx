import * as React from "react";
import { Flex } from "@chakra-ui/react";

type WrapperType = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperType> = ({ children }) => {
  return (
    <Flex direction="column" bg="gray.800" p="16px" borderRadius="8px">
      {children}
    </Flex>
  );
};

export default Wrapper;
