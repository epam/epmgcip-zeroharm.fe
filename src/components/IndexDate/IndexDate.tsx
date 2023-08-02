import React from "react";
import Wrapper from "@UI/Wrapper/Wrapper";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { ReactComponent as InfoFill } from "@/assets/icons/filled/harm-info-fill.svg";
import { Progress } from "@UI/Progress/Progress";
import { indexesConfig, groupsColors, parametersAliases, ParametersAliasesKeyType } from "@/constants";
import { getParameterGroup } from "@/helpers";
import { useDataStore } from "@/store/useDataStore";
import { getDate } from "@/helpers";
import { t } from "i18next";

type IndexDateType = {
  children?: React.ReactNode;
};

export const IndexDate: React.FC<IndexDateType> = ({ children }) => {
  const { parameter, parametersValues } = useDataStore();
  const currentTimeAndDAte = getDate();
  const label = t(`hints.${parameter}`);
  const currentParameterName = t(`indexes.${parameter}`);
  const parameterKey = parametersAliases[parameter as ParametersAliasesKeyType];
  const currentParameterValue = parametersValues[parameterKey] || 0;

  const { titleTranslationPath } = getParameterGroup(currentParameterValue, parameter as ParametersAliasesKeyType) || {};
  const title = t(titleTranslationPath || "");

  const indexGroups = indexesConfig[parameter as ParametersAliasesKeyType];
  const absoluteMin =  indexGroups?.[0]?.range?.min;
  const absoluteMax = indexGroups?.[indexGroups.length - 1]?.range?.max;

  return (
    <Wrapper>
      <Flex justifyContent="space-between" fontSize="12px">
        <Flex gap="10px">
          <Text textTransform="uppercase">
            { currentParameterName }
          </Text>
          <Tooltip
            sx={{ borderRadius: "8px", padding: "1rem" }}
            hasArrow
            bg="gray.700"
            label={label}
            placement="right-start"
          >
            <InfoFill style={{ width: 16, height: 16 }} opacity=".5"/>
          </Tooltip>
        </Flex>
        <Box color="gray.400">{currentTimeAndDAte}</Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        gap="10px"
        p="14px 0 10px"
        fontSize="16px"
        fontWeight="700"
      >
        <Text>{ title }</Text>
        <Text>{ currentParameterValue }</Text>
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
      {children}
    </Wrapper>
  );
};
