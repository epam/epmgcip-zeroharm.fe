import * as React from "react";
import Wrapper from "@UI/Wrapper/Wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import { getDate } from "@/helpers";
import { Indicator } from "@UI/Indicator/Indicator";

type IndexDateType = {
  children?: React.ReactNode;
};

export const Indicators: React.FC<IndexDateType> = ({ children }) => {
  const currentTimeAndDAte = getDate();
  const colors = ["red", "orange", "green"];
  const hints = ["PM2.5", "PM10", "PM1", "NO", "NO2", "NH3", "CO", "O3"];

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
      {hints.map(
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
