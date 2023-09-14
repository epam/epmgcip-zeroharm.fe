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
  const { isLargerThan1024 } = useDetectWidth();

  const placement = isLargerThan1024 ? "right-start" : "bottom-end";

  return (
    <Tooltip
      closeOnScroll
      label={label}
      hasArrow
      bg="gray.700"
      placement={placement}
      shouldWrapChildren
      maxH="auto"
      maxW={{ base: "343px", md: "600px" }}
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
