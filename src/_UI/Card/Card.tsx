import { FC, ReactNode } from "react";
import { Flex, Box, chakra } from "@chakra-ui/react";
import CardIcon from "../CardIcon/CardIcon";

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
    padding: "24px",
    position: "relative",
    minHeight: "150px",
    height: "100%"
  }
});
const CardBody = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    gap: "16px",
    borderRadius: "0 0 8px 8px",
    padding: "24px",
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
    fontWeight: "700",
    fontSize: "14px"
  }
});
const CardHeading = chakra(Box, {
  baseStyle: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "36px"
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
    svg: { width: "124px", height: "100%" }
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
      <CardHeader bg={`${color}.500`}>
        <CardText>
          <CardSubHeading>{subheading}</CardSubHeading>
          <CardHeading>{heading}</CardHeading>
        </CardText>
        <CardIconBox>
          <CardIcon name={iconName} />
        </CardIconBox>
      </CardHeader>
      <CardBody bg={`${color}.50`} h={height}>
        {children}
      </CardBody>
    </>
  );
};
