import * as React from "react";
import Wrapper from "@UI/Wrapper/Wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import { getDate, getParameterGroup } from "@/helpers";
import { Indicator } from "@UI/Indicator/Indicator";
import { useDataStore } from "@/store/useDataStore";
import { particlesAliases, ParticlesAliasesKeyType, groupsColors, GroupsColorsKeyType } from "@/constants";

type IndexDateType = {
  children?: React.ReactNode;
};

const hints = ["PM2.5", "PM10", "NO2", "CO", "O3", "SO2"];

export const Indicators: React.FC<IndexDateType> = ({ children }) => {
  const { parametersValues } = useDataStore();

  const currentTimeAndDAte = getDate();

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
          const particleName = particlesAliases[hint as ParticlesAliasesKeyType];
          const particleValue = Number(parametersValues[particleName]);
          const { groupName } = getParameterGroup(particleValue, "air_quality") || {};
          const color = groupsColors?.[groupName as GroupsColorsKeyType];
          const particleValueStr = String(particleValue);
          const roundedParticleValue = parseFloat(particleValueStr.slice(0, particleValueStr.indexOf(".") + 3));
          const size = isNaN(roundedParticleValue) ? 0 : roundedParticleValue;

          return (
            <Indicator size={size} title={hint} key={hint} color={color} />
          );
        }
      )}
    </Wrapper>
  );
};
