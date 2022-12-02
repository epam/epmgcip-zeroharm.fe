import * as React from "react";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { ReactComponent as InfoFill } from "../../assets/icons/harm-info_fill.svg";
import { Progress } from "../../_UI/Progress/Progress";

type IndexDateType = {
  children?: React.ReactNode;
  color?: string;
  size?: number;
  title?: string;
};

export const Indicator: React.FC<IndexDateType> = ({ children,color,size,title }) => {
  const label =
    "Air quality index — is used by government agencies to communicate to the public how polluted the air " +
    "currently is or how polluted it is forecast to become. " +
    "AQI information is obtained by averaging readings from an air quality sensor, " +
    "which can increase due to vehicle traffic, forest fires, or anything that can " +
    "increase air pollution. Pollutants tested include ozone, nitrogen dioxide, sulphur dioxide, among others.";
  return (
    <>
      <Flex justifyContent="space-between" fontSize="12px" alignItems="center" pb="8px">
        <Flex gap="10px" maxWidth="80px">
          <Text>{title}</Text>
          <Box w="24" opacity=".5">
            <Tooltip
              sx={{ borderRadius: "8px", padding: "1rem" }}
              hasArrow
              bg="gray.700"
              label={label}
              placement="right-start"
            >
              <InfoFill style={{ width: 16, height: 16 }} />
            </Tooltip>
          </Box>
        </Flex>
        <Box flex="1">
          <Progress colorScheme={color} value={size} />
        </Box>
        <Flex gap="6px" flex="0 0 80px" justifyContent="flex-end">
          <Text color="white" fontWeight="700">
            {size}
          </Text>
          <Text color="gray.400">µg/m³</Text>
        </Flex>
      </Flex>
    </>
  );
};