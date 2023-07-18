import * as React from "react";
import Wrapper from "@UI/Wrapper/Wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import { getDate } from "@/helpers";
import { Indicator } from "@UI/Indicator/Indicator";
import { useDataStore } from "@/store/useDataStore";

type IndexDateType = {
  children?: React.ReactNode;
};

const mapKeysToParticleNames = {
  "PM2.5": "pm2_5",
  "PM10": "pm10",
  "PM1": "",
  "NO": "",
  "NO2": "nitrogen_dioxide",
  "NH3": "",
  "CO": "carbon_monoxide",
  "O3": "ozone",
  "SO2": "sulfur_dioxide"
};

type ParticleType = keyof typeof mapKeysToParticleNames;
type ParticleNames = "pm2_5" | "pm10" | "nitrogen_dioxide" | "carbon_monoxide" | "ozone" | "sulfur_dioxide";


export const Indicators: React.FC<IndexDateType> = ({ children }) => {
  const { parametersValues } = useDataStore();

  const currentTimeAndDAte = getDate();
  const colors = ["red", "orange", "green"];
  const hints = ["PM2.5", "PM10", "NO2", "CO", "O3", "SO2"];

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
        (hint) => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const particleName = mapKeysToParticleNames[hint as ParticleType];
          const particleValue = parametersValues[particleName as ParticleNames] || 0;
          const particleValueStr = String(particleValue);
          const roundedParticleValue = parseFloat(particleValueStr.slice(0, particleValueStr.indexOf(".") + 3));

          return (
            <Indicator size={roundedParticleValue} title={hint} key={hint} color={color} />
          );
        }
      )}
    </Wrapper>
  );
};
