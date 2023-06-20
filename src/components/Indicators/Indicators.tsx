import * as React from "react";
import Wrapper from "@UI/Wrapper/Wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import getDate from "@/hooks/getDate";
import { Indicator } from "@UI/Indicator/Indicator";

type IndexDateType = {
  children?: React.ReactNode;
};

export const Indicators: React.FC<IndexDateType> = ({ children }) => {
  const currentTimeAndDAte = getDate(24);
  const colors = ["red", "orange", "green"];
  return (
    <Wrapper>
      <Flex justifyContent="space-between" gap="10px" pb="10px">
        <Text fontSize="12px" fontWeight="700" textTransform="uppercase">
          Indicators
        </Text>
        <Box color="gray.400" fontSize="12px">
          {currentTimeAndDAte}
        </Box>
      </Flex>
      {["PM2.5", "PM10", "PM1", "NO", "NO2", "NH3", "CO", "SO2", "03"].map(
        (i) => {
          const randLength = Math.floor(Math.random() * 90);
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <Indicator size={randLength} title={i} key={i} color={color} />
          );
        }
      )}
    </Wrapper>
  );
};
