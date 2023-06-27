import * as React from "react";
import Wrapper from "@UI/Wrapper/Wrapper";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { ReactComponent as InfoFill } from "@/assets/icons/filled/harm-info-fill.svg";
import { Progress } from "@UI/Progress/Progress";
import { useDataStore } from "@/store/useDataStore";
import { getDate } from "@/helpers";
import { t } from "i18next";

type IndexDateType = {
  children?: React.ReactNode;
};

export const IndexDate: React.FC<IndexDateType> = ({ children }) => {
  const { parameter } = useDataStore();
  const currentTimeAndDAte = getDate();
  const label = t(`hints.${parameter}`);
  const currentIndexName = t(`indexes.${parameter}`);

  return (
    <Wrapper>
      <Flex justifyContent="space-between" fontSize="12px">
        <Flex gap="10px">
          <Text textTransform="uppercase">
            { currentIndexName }
          </Text>
          <Box w="24" opacity=".5">
            <Tooltip
              sx={{ borderRadius: "8px", padding: "1rem" }}
              hasArrow
              bg="gray.700"
              label={label}
              placement="right-start"
            >
              <InfoFill style={{ width: 16, height: 16 }} />
            </Tooltip>
          </Box>
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
        <Text>Too poor air</Text>
        <Text>22</Text>
      </Flex>
      <Progress isGradient value={20} />
      {children}
    </Wrapper>
  );
};
