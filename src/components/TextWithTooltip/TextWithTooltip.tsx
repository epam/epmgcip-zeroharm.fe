import { FC } from "react";
import { Center, Flex, Tooltip, Text } from "@chakra-ui/react";
import { ReactComponent as InfoFill } from "@Assets/icons/filled/harm-info-fill.svg";

type TextWithTooltipProps = {
  label: string | number;
  text: string | number;
  fontSize: number | string;
  iconSize: string | number;
}

export const TextWithTooltip: FC<TextWithTooltipProps> = ({ label, text, fontSize, iconSize }) => {

  return (
    <Tooltip
      label={label}
      hasArrow
      placement="right-start"
      shouldWrapChildren
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
          w={iconSize}
          opacity=".5"
        >
          <InfoFill
            width={iconSize}
            height={iconSize}
          />
        </Center>
      </Flex>
    </Tooltip>
  );
};
