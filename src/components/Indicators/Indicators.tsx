import { FC } from "react";
import { t } from "i18next";
import { Flex, Text } from "@chakra-ui/react";
import { IndicatorWrapper, Indicator } from "@UI";
import { getParameterGroup } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { ParticlesAliasesKeyType, groupsColors, GroupsColorsKeyType } from "@Constants";

const hints = ["PM2.5", "PM10", "NO2", "CO", "O3", "SO2"];

export const Indicators: FC = () => {
  const { airComponents } = useDataStore();

  return (
    <IndicatorWrapper>
      <Text
        fontSize={{ base: "tiny", lg: "small" }}
        lineHeight={{ base: "tiny", lg: "small" }}
        fontWeight="700"
        textTransform="uppercase"
      >
        { t("indicators") }
      </Text>
      <Flex
        direction="column"
        gap={{ base: "4px", lg: "8px" }}
      >
        {
          hints.map((hint) => {
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
          })
        }
      </Flex>
    </IndicatorWrapper>
  );
};
