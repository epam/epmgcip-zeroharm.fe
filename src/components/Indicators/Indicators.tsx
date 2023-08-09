import { FC, ReactNode } from "react";
import Wrapper from "@UI/Wrapper/Wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import { getDate, getParameterGroup } from "@/helpers";
import { Indicator } from "@UI/Indicator/Indicator";
import { useDataStore } from "@/store/useDataStore";
import { ParticlesAliasesKeyType, groupsColors, GroupsColorsKeyType } from "@/constants";

type IndexDateType = {
  children?: ReactNode;
};

const hints = ["PM2.5", "PM10", "NO2", "CO", "O3", "SO2"];

export const Indicators: FC<IndexDateType> = ({ children }) => {
  const { airComponents } = useDataStore();

  const currentTimeAndDAte = getDate();

  return (
    <Wrapper>
      <Flex
        justifyContent="space-between"
        gap="10px"
        pb="10px"
      >
        <Text
          fontSize="12px"
          fontWeight="700"
          textTransform="uppercase"
        >
          Indicators
        </Text>
        <Box
          color="gray.400"
          fontSize="12px"
        >
          { currentTimeAndDAte }
        </Box>
      </Flex>
      { hints.map(
        (hint) => {
          const particleValue = Number(airComponents[hint as ParticlesAliasesKeyType]);
          const groupName = getParameterGroup(particleValue, "air_quality") || {};
          const color = groupsColors?.[groupName as GroupsColorsKeyType];
          const particleValueStr = String(particleValue);
          const roundedParticleValue = parseFloat(particleValueStr.slice(0, particleValueStr.indexOf(".") + 3));
          const size = isNaN(roundedParticleValue) ? 0 : roundedParticleValue;

          return (
            <Indicator
              size={size}
              title={hint}
              key={hint}
              color={color}
            />
          );
        }
      ) }
    </Wrapper>
  );
};
