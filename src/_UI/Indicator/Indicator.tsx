import { FC, ReactNode } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { TextWithTooltip } from "@Components";
import { Progress } from "../Progress/Progress";

type IndexDateType = {
  title: string;
  children?: ReactNode;
  color?: string;
  size?: number;
};

export const Indicator: FC<IndexDateType> = ({ title, color, size }) => {
  const hint = title.toLowerCase();
  const label = t(`hints.${hint}`);

  return (
    <Flex
      fontSize="tiny"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <TextWithTooltip
        fontSize="medium"
        lineHeight="medium"
        label={label}
        text={title}
        iconSize="12px"
      />
      <Box
        pos="absolute"
        left="96px"
        w={{ base: "119px", md: "103px", lg: "168px" }}
      >
        <Progress
          colorScheme={color}
          value={size}
        />
      </Box>
      <Flex
        gap="6px"
        flex="0 0 80px"
        justifyContent="flex-end"
      >
        <Text
          color="white"
          fontWeight="700"
          fontSize="medium"
        >
          { size }
        </Text>
        <Text
          pos="relative"
          top="4px"
          color="gray.400"
          fontSize="tiny"
        >
          µg/m³
        </Text>
      </Flex>
    </Flex>
  );
};
