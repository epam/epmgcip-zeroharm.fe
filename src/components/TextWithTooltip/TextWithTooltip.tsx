import { FC } from "react";
import { Center, Flex, Tooltip, Text, FlexProps } from "@chakra-ui/react";
import { useDetectWidth } from "@Hooks";
import { ReactComponent as InfoFill } from "@Assets/icons/filled/harm-info-fill.svg";

interface TextWithTooltipProps extends FlexProps {
  label: string | number;
  text: string | number;
  iconSize: string | number;
}

export const TextWithTooltip: FC<TextWithTooltipProps> = ({ label, text, fontSize, lineHeight, iconSize }) => {
  const { isLargerThan600 } = useDetectWidth();

  const placement = isLargerThan600 ? "right-start" : "bottom-end";

  return (
    <Tooltip
      maxW={{ base: "343px", md: "600px"}}
      overflow="hidden"
      h="128px"
      label={label}
      hasArrow
      placement={placement}
      shouldWrapChildren
    >
      <Flex
        fontSize={fontSize}
        lineHeight={lineHeight}
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
