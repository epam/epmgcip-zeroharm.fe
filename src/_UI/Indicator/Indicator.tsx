import * as React from "react";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { ReactComponent as InfoFill } from "@/assets/icons/filled/harm-info-fill.svg";
import { Progress } from "@UI/Progress/Progress";
import { t } from "i18next";

type IndexDateType = {
  title: string;
  children?: React.ReactNode;
  color?: string;
  size?: number;
};

export const Indicator: React.FC<IndexDateType> = ({ title, color, size }) => {
  const hint = title.toLowerCase();
  const label = t(`hints.${hint}`);

  return (
    <>
      <Flex
        justifyContent="space-between"
        fontSize="12px"
        alignItems="center"
        pb="8px"
        gap="24px"
      >
        <Tooltip
          label={label}
          hasArrow
          placement="right-start"
          variant="default"
        >
          <Flex gap="10px" maxWidth="80px" fontSize="16px">
            <Text>{title}</Text>
            <Box w="24" opacity=".5">
              <InfoFill style={{ width: 16, height: 16 }} />
            </Box>
          </Flex>
        </Tooltip>
        <Box flex="1">
          <Progress colorScheme={color} value={size} />
        </Box>
        <Flex gap="6px" flex="0 0 80px" justifyContent="flex-end">
          <Text color="white" fontWeight="700" fontSize="16px">
            {size}
          </Text>
          <Text color="gray.400">µg/m³</Text>
        </Flex>
      </Flex>
    </>
  );
};
