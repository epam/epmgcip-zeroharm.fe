import { FC, ReactNode } from "react";
import { Flex, Text, TextProps } from "@chakra-ui/react";

type MobileMenuHeadingTipProps = TextProps & {
  children: ReactNode;
}

export const MobileMenuHeadingTip: FC<MobileMenuHeadingTipProps> = ({ children, ...props }) => (
  <Flex
    w="calc(100vw - var(--headerMobileHeight))"
    h="var(--headerMobileHeight)"
    zIndex="1300"
    bgColor="secondaryBgColor"
    color="inherit"
    pl="8px"
    pr="16px"
    pos="fixed"
    top="0"
    left="var(--headerMobileHeight)"
    alignItems="center"
  >
    <Text
      noOfLines={1}
      textAlign="left"
      wordBreak="break-all"
      {...props}
    >
      { children }
    </Text>
  </Flex>
);

