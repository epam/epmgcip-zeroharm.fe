import { FC } from "react";
import { Center, Flex, Tooltip, Text } from "@chakra-ui/react";
import { ReactComponent as InfoFill } from "@Assets/icons/filled/harm-info-fill.svg";

type TextWithTooltipProps = {
  label: string | number;
  text: string | number;
  fontSize: number | string;
}

export const TextWithTooltip: FC<TextWithTooltipProps> = ({ label, text, fontSize }) => {

  return (
    <Tooltip
      label={label}
      hasArrow
      placement="right-start"
    >
      <Flex
        fontSize={fontSize}
        fontWeight="bold"
        gap="4px"
      >
        <Text textTransform="uppercase">
          { text }
        </Text>
        <Center
          w="12px"
          opacity=".5"
        >
          <InfoFill
            width="12px"
            height="12px"
          />
        </Center>
      </Flex>
    </Tooltip>
  );
};
