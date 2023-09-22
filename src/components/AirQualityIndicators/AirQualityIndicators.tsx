import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IndicatorWrapper } from "@UI";
import { getParameterIndexGroupName } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { airComponentsNamesList, indexGroupColorsMap, IndexesGroupsNames, ParametersMap } from "@Constants";
import { Indicator } from "./Indicator";

export const AirQualityIndicators: FC = () => {
  const { t } = useTranslation();
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
          airComponentsNamesList.map((airComponent) => {
            const particleValue = +airComponents[airComponent];
            const groupName = getParameterIndexGroupName(particleValue, ParametersMap.AIR_QUALITY);
            const color = indexGroupColorsMap[groupName as IndexesGroupsNames];
            const particleValueStr = String(particleValue);
            const roundedParticleValue = parseFloat(particleValueStr.slice(0, particleValueStr.indexOf(".") + 3));
            const value = isNaN(roundedParticleValue) ? 0 : roundedParticleValue;

            return (
              <Indicator
                key={airComponent}
                title={airComponent}
                color={color}
                value={value}
              />
            );
          })
        }
      </Flex>
    </IndicatorWrapper>
  );
};
