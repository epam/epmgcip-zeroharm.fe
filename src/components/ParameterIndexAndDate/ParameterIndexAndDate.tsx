import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { IndicatorWrapper } from "@UI";
import { CardData, Parameter, parametersIndexGroupRanges } from "@Constants";
import { useDataStore } from "@Store/useDataStore";
import { TextWithTooltip } from "../TextWithTooltip/TextWithTooltip";
import { ProgressRange } from "./ProgressRange";

type ParameterIndexAndDateProps = {
  cardData: CardData;
  currentParameter: Parameter;
  currentParameterValue: number;
}

export const ParameterIndexAndDate: FC<ParameterIndexAndDateProps> = ({ cardData, currentParameter, currentParameterValue }) => {
  const { fetchingDate } = useDataStore();

  const { heading } = cardData;
  const indexGroups = parametersIndexGroupRanges[currentParameter];
  const absoluteMin = indexGroups?.[0]?.range?.min;
  const absoluteMax = indexGroups?.[indexGroups.length - 1]?.range?.max;

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
          color="indicator.secondary"
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
            indexGroups?.map(({ groupName, range }, index) => (
              <ProgressRange
                index={index}
                indexGroupsLength={indexGroups.length}
                key={groupName}
                groupName={groupName}
                range={range}
                currentParameterValue={currentParameterValue}
                absoluteMin={absoluteMin}
                absoluteMax={absoluteMax}
              />
            ))
          }
        </Flex>
      </Flex>
    </IndicatorWrapper>
  );
};
