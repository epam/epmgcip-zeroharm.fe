import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IndicatorWrapper } from "@UI";
import { getParameterGroupName } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { airComponentsList, parametersGroupColorsMap, type ParameterGroupName, ParametersMap } from "@Constants";
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
          airComponentsList.map((airComponent) => {
            const airComponentValue = airComponents[airComponent];
            const groupName = getParameterGroupName(airComponentValue, ParametersMap.AIR_QUALITY);
            const color = parametersGroupColorsMap[groupName as ParameterGroupName];
            const roundedAirComponentValue = +airComponentValue.toFixed(3);
            const value = isNaN(roundedAirComponentValue) ? 0 : roundedAirComponentValue;

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
