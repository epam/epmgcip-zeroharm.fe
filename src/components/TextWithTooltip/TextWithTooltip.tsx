import { FC } from "react";
import { Center, Flex, Tooltip, Text, FlexProps, Icon } from "@chakra-ui/react";
import { useDetectWidth } from "@Hooks";
import { ReactComponent as InfoICon } from "@Assets/icons/filled/harm-info-fill.svg";

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
      placement={placement}
      shouldWrapChildren
      bgColor="parameter.tooltipBg"
      sx={{
        maxH: "auto",
        minW: { base: "343px", md: "300px" },
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
          <Icon
            as={InfoICon}
            width={iconSize}
            height={iconSize}
            fill="parameter.icon"
          />
        </Center>
      </Flex>
    </Tooltip>
  );
};
