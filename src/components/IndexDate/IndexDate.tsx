import * as React from "react";
import Wrapper from "../../_UI/Wrapper/Wrapper";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { ReactComponent as InfoFill } from "../../assets/icons/filled/harm-info-fill.svg";
import { Progress } from "../../_UI/Progress/Progress";
import dayjs from "dayjs";

type IndexDateType = {
  children?: React.ReactNode;
};

export const IndexDate: React.FC<IndexDateType> = ({ children }) => {
  const currentTimeAndDAte = dayjs().format("hh:mm, MMM D");
  const label =
    "Air quality index — is used by government agencies to communicate to the public how polluted the air " +
    "currently is or how polluted it is forecast to become. " +
    "AQI information is obtained by averaging readings from an air quality sensor, " +
    "which can increase due to vehicle traffic, forest fires, or anything that can " +
    "increase air pollution. Pollutants tested include ozone, nitrogen dioxide, sulphur dioxide, among others.";
  return (
    <Wrapper>
      <Flex justifyContent="space-between" fontSize="12px">
        <Flex gap="10px">
          <Text>AIR QUALITY INDEX</Text>
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
        <Box color="gray.400">{currentTimeAndDAte}</Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        gap="10px"
        p="14px 0 10px"
        fontSize="16px"
        fontWeight="700"
      >
        <Text>Too poor air</Text>
        <Text>22</Text>
      </Flex>
      <Progress isGradient value={20} />
      {children}
    </Wrapper>
  );
};
