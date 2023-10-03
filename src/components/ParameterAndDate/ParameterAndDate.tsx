import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IndicatorWrapper } from "@UI";
import { CardData, Parameter, parametersGroupColorsMap, parametersGroupsRanges } from "@Constants";
import { useDataStore } from "@Store/useDataStore";
import { TextWithTooltip } from "../TextWithTooltip/TextWithTooltip";
import { ParameterProgress } from "./ParameterProgress";

type ParameterAndDateProps = {
  cardData: CardData;
  currentParameter: Parameter;
  currentParameterValue: number;
}

export const ParameterAndDate: FC<ParameterAndDateProps> = ({ cardData, currentParameter, currentParameterValue }) => {
  const { t } = useTranslation();
  const { fetchingDate } = useDataStore();

  const { heading, cardColor } = cardData;
  const parameterGroupRange = parametersGroupsRanges[currentParameter];

  return (
    <IndicatorWrapper>
      <Flex justifyContent="space-between">
        <TextWithTooltip
          label={t(`hints.${currentParameter}`)}
          text={t(`indexes.${currentParameter}`)}
          fontSize={{ base: "tiny", lg: "small" }}
          lineHeight={{ base: "tiny", lg: "small" }}
          iconSize="16px"
        />
        <Box
          color="parameter.secondary"
          fontSize="tiny"
        >
          { fetchingDate }
        </Box>
      </Flex>

      <Flex
        direction="column"
        gap="8px"
      >
        <Flex
          justifyContent="space-between"
          gap="10px"
          fontSize="medium"
          fontWeight="700"
        >
          <Text
            fontSize={{ base: "small", lg: "medium" }}
            lineHeight={{ base: "small", lg: "medium" }}
          >
            { heading }
          </Text>
          <Text
            fontSize="medium"
            lineHeight="medium"
          >
            { currentParameterValue }
          </Text>
        </Flex>

        <Flex
          justifyContent="space-between"
          gap="5px"
        >
          {
            parameterGroupRange?.map(({ groupName, range: { max } }) => {
              const color = parametersGroupColorsMap[groupName];
              const isBiggerThanMax = currentParameterValue > max;

              return (
                <ParameterProgress
                  key={groupName}
                  withPointer={cardColor === color}
                  value={currentParameterValue}
                  max={isBiggerThanMax ? currentParameterValue : max}
                  color={color}
                />
              );
          })
          }
        </Flex>
      </Flex>
    </IndicatorWrapper>
  );
};
