import { FC } from "react";
import { t } from "i18next";
import { Flex, Text } from "@chakra-ui/react";
import { IndicatorWrapper } from "@UI";
import { getParameterIndexGroupName } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { airComponentsList, groupsColors, IndexesGroupsNames, ParametersMap } from "@Constants";
import { Indicator } from "./Indicator";

export const AirQualityIndicators: FC = () => {
  const { airComponents } = useDataStore();

  const indicatorHintsToRender = airComponentsList.map((hint) => {
    const particleValue = Number(airComponents[hint]);
    const groupName = getParameterIndexGroupName(particleValue, ParametersMap.AIR_QUALITY);
    const color = groupsColors?.[groupName as IndexesGroupsNames];
    const particleValueStr = String(particleValue);
    const roundedParticleValue = parseFloat(particleValueStr.slice(0, particleValueStr.indexOf(".") + 3));
    const value = isNaN(roundedParticleValue) ? 0 : roundedParticleValue;

    return (
      <Indicator
        value={value}
        title={hint}
        key={hint}
        color={color}
      />
    );
  });

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
        { indicatorHintsToRender }
      </Flex>
    </IndicatorWrapper>
  );
};
