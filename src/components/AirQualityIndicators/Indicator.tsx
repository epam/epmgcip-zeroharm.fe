import { FC } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { TextWithTooltip } from "@Components";
import { Progress } from "@UI";

type IndicatorProps = {
  title: string;
  color: string;
  value: number;
};

export const Indicator: FC<IndicatorProps> = ({ title, color, value }) => {
  const { t } = useTranslation();
  const hint = title.toLowerCase();
  const label = t(`hints.${hint}`);

  return (
    <Flex
      fontSize="tiny"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <TextWithTooltip
        fontSize="medium"
        lineHeight="medium"
        label={label}
        text={title}
        iconSize="12px"
      />
      <Box
        pos="absolute"
        left="96px"
        w={{ base: "119px", md: "103px", lg: "168px" }}
      >
        <Progress
          color={color}
          value={value}
        />
      </Box>
      <Text
        color="primaryColor"
        fontWeight="700"
        fontSize="medium"
        display="inline-block"
        verticalAlign="bottom"
      >
        { value }
        <Text
          as="span"
          fontWeight="initial"
          color="parameter.secondary"
          fontSize="tiny"
          ml="4px"
        >
          µg/m³
        </Text>
      </Text>
    </Flex>
  );
};
