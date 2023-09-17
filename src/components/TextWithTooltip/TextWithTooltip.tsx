import { FC } from "react";
import { Center, Flex, Tooltip, Text, FlexProps } from "@chakra-ui/react";
import { useDetectWidth } from "@Hooks";
import { ReactComponent as InfoFill } from "@Assets/icons/filled/harm-info-fill.svg";

type TextWithTooltipProps = FlexProps & {
  label: string;
  text: string | number;
  iconSize: string | number;
}

export const TextWithTooltip: FC<TextWithTooltipProps> = ({ label, text, iconSize, ...props }) => {
  const { isLargerThan1024 } = useDetectWidth();

  const preferredNumberOfCharactersPerLine = label.length / 6;

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
      sx={{
        maxW: { base: "343px", md: "600px" },
        w: `${preferredNumberOfCharactersPerLine}ch`
      }}
    >
      <Flex
        fontWeight="bold"
        gap="4px"
        {...props}
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
