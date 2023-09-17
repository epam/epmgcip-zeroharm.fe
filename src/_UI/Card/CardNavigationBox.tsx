import { Flex, FlexProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type CardNavigationBoxProps = FlexProps & {
  children?: ReactNode;
}

export const CardNavigationBox: FC<CardNavigationBoxProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      alignItems="center"
      {...props}
      boxSize="56px"
      position="relative"
    >
      { children }
    </Flex>
  );
};
