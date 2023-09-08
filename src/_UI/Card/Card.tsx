import { FC, ReactNode } from "react";
import { Flex, Box, chakra } from "@chakra-ui/react";
import { Icon } from "../Icon/Icon";

export type CardType = {
  heading: string;
  subheading: string;
  iconName: string;
  color?: string;
  height?: string;
  children?: ReactNode;
};

const CardHeader = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    borderRadius: "8px 8px 0 0",
    position: "relative"
  }
});
const CardBody = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    gap: "16px",
    borderRadius: "0 0 8px 8px",
    color: "black"
  }
});
const CardText = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1"
  }
});
const CardSubHeading = chakra(Box, {
  baseStyle: {
    opacity: "0.6",
    textTransform: "uppercase",
    fontWeight: "700"
  }
});
const CardHeading = chakra(Box, {
  baseStyle: {
    fontWeight: "700",
    fontSize: "headers.h3",
    lineHeight: "headers.h3"
  }
});

const CardIconBox = chakra("div", {
  shouldForwardProp: (prop) => !["sample"].includes(prop),
  baseStyle: {
    opacity: ".2",
    position: "absolute",
    right: "18px",
    top: "50%",
    transform: "translate(0, -50%)",
    svg: {
      maxW: "124px",
      w: "100%",
      height: "100%"
    }
  }
});

export const Card: FC<CardType> = ({
  heading,
  subheading,
  iconName,
  color,
  height,
  children
}) => {
  return (
    <>
      <CardHeader
        bg={`${color}.500`}
        minHeight={{ base: "120px", md: "150px" }}
        padding={{ base: "16px", md: "24px" }}
      >
        <CardText>
          <CardSubHeading
            fontSize={{ base: "tiny", md: "small" }}
            lineHeight={{ base: "tiny", md: "small" }}
          >
            { subheading }
          </CardSubHeading>
          <CardHeading
            fontSize={{ base: "22px", md: "headers.h3" }}
            lineHeight={{ base: "headers.h4", md: "headers.h3" }}
          >
            { heading }
          </CardHeading>
        </CardText>
        <CardIconBox
          w={{ base: "96px", md: "122px" }}
        >
          <Icon
            type="forcards"
            name={iconName}
          />
        </CardIconBox>
      </CardHeader>
      <CardBody
        bg={`${color}.50`}
        h={height}
        padding={{ base: "16px", md: "24px" }}
      >
        { children }
      </CardBody>
    </>
  );
};
