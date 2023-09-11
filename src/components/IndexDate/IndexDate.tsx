import { FC, ReactNode } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { IndicatorWrapper, Progress } from "@UI";
import { indexesConfig, groupsColors, ParametersAliasesKeyType } from "@Constants";
import { getCardData } from "@Helpers";
import { useParameterData } from "@Hooks";
import {useDataStore} from "@Store/useDataStore";
import { TextWithTooltip } from "../TextWithTooltip/TextWithTooltip";

type IndexDateType = {
  children?: ReactNode;
};

export const IndexDate: FC<IndexDateType> = ({ children }) => {
  const { parameter, currentParameterValue } = useParameterData();
  const { fetchingDate } = useDataStore();

  const { heading } = getCardData(currentParameterValue, parameter as ParametersAliasesKeyType) ?? "";
  const indexGroups = indexesConfig[parameter as ParametersAliasesKeyType];
  const absoluteMin = indexGroups?.[0]?.range?.min;
  const absoluteMax = indexGroups?.[indexGroups.length - 1]?.range?.max;

  return (
    <IndicatorWrapper>
      <Flex justifyContent="space-between">
        <TextWithTooltip
          label={t(`hints.${parameter}`)}
          text={t(`indexes.${parameter}`)}
          fontSize={{
            base: "tiny",
            lg: "small"
          }}
          lineHeight={{
            base: "tiny",
            lg: "small"
          }}
          iconSize="16px"
        />
        <Box
          color="gray.400"
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
            fontSize={{
              base: "small",
              lg: "medium"
            }}
            lineHeight={{
              base: "small",
              lg: "medium"
            }}
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
            indexGroups?.map(({ groupName, range }, idx) => {
              const color = groupsColors[groupName];
              const { min, max } = range;
              const isFirstRange = idx === 0;
              const isLastRange = idx === indexGroups.length - 1;
              const withinRange = (min <= currentParameterValue) && (currentParameterValue <= max);
              const isAbsoluteMin = (0 <= currentParameterValue) && (currentParameterValue < absoluteMin) && isFirstRange;
              const isAbsoluteMax = (currentParameterValue > absoluteMax) && isLastRange;
              const withPointer = isAbsoluteMin || isAbsoluteMax || withinRange;

              if (withPointer) {
                const divider = isAbsoluteMax ? currentParameterValue : max;
                const pointerPosition = Math.round(currentParameterValue / divider * 100);

                return (
                  <Progress
                    key={groupName}
                    colorScheme={color}
                    value={100}
                    withPointer
                    pointerPosition={pointerPosition}
                  />
                );
              }

              return (
                <Progress
                  key={groupName}
                  colorScheme={color}
                  value={100}
                />
              );
            })
          }
        </Flex>
      </Flex>
      { children }
    </IndicatorWrapper>
  );
};
