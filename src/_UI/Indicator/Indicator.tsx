import { FC, ReactNode } from "react";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { t } from "i18next";
import { Progress } from "@UI";
import { ReactComponent as InfoFill } from "@Assets/icons/filled/harm-info-fill.svg";

type IndexDateType = {
  title: string;
  children?: ReactNode;
  color?: string;
  size?: number;
};

export const Indicator: FC<IndexDateType> = ({ title, color, size }) => {
  const hint = title.toLowerCase();
  const label = t(`hints.${hint}`);

  return (
    <>
      <Flex
        justifyContent="space-between"
        fontSize="12px"
        alignItems="center"
        pb="8px"
        gap="24px"
      >
        <Tooltip
          label={label}
          hasArrow
          placement="right-start"
          variant="default"
        >
          <Flex
            gap="10px"
            maxWidth="80px"
            fontSize="16px"
          >
            <Text>{ title }</Text>
            <Box
              w="24"
              opacity=".5"
            >
              <InfoFill
                width="16px"
                height="16px"
              />
            </Box>
          </Flex>
        </Tooltip>
        <Box flex="1">
          <Progress
            colorScheme={color}
            value={size}
          />
        </Box>
        <Flex
          gap="6px"
          flex="0 0 80px"
          justifyContent="flex-end"
        >
          <Text
            color="white"
            fontWeight="700"
            fontSize="16px"
          >
            { String(size) }
          </Text>
          <Text color="gray.400">µg/m³</Text>
        </Flex>
      </Flex>
    </>
  );
};
