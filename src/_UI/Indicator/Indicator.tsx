import { FC, ReactNode } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { TextWithTooltip } from "@Components";
import { Progress } from "../Progress/Progress";

type IndexDateType = {
  title: string;
  children?: ReactNode;
  color?: string;
  value?: number;
};

export const Indicator: FC<IndexDateType> = ({ title, color, value }) => {
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
          value={value}
        />
      </Box>
      <Text
        color="white"
        fontWeight="700"
        fontSize="medium"
        display="inline-block"
        verticalAlign="bottom"
      >
        { value }
        <Text
          as="span"
          fontWeight="initial"
          color="gray.400"
          fontSize="tiny"
          ml="4px"
        >
          µg/m³
        </Text>
      </Text>
    </Flex>
  );
};
