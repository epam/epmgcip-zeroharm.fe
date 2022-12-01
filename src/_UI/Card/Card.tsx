import * as React from "react";
import { Flex, Box, chakra } from "@chakra-ui/react";

type CardType = {
  color?: string;
  subheading?: string;
  heading?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const CardHeader = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    borderRadius: "8px 8px 0 0",
    padding: "24px",
    position: "relative",
    minHeight: "150px",
    height: "100%",
  },
});
const CardBody = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    gap: "16px",
    borderRadius: "0 0 8px 8px",
    padding: "24px",
  },
});
const CardText = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1",
  },
});
const CardSubHeading = chakra(Box, {
  baseStyle: {
    opacity: "0.6",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "14px",
  },
});
const CardHeading = chakra(Box, {
  baseStyle: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "36px",
  },
});
const CardIcon = chakra(Box, {
  baseStyle: {
    opacity: ".2",
    position: "absolute",
    right: "18px",
    top: "50%",
    transform: "translate(0, -50%)",
  },
});

const Card: React.FC<CardType> = ({
  color,
  subheading,
  heading,
  icon,
  children,
}) => {
  return (
    <Box>
      <CardHeader bg={`${color}.500`}>
        <CardText>
          <CardSubHeading>{subheading}</CardSubHeading>
          <CardHeading>{heading}</CardHeading>
        </CardText>
        <CardIcon>{icon}</CardIcon>
      </CardHeader>
      <CardBody color="black" bg={`${color}.50`}>
        {children}
      </CardBody>
    </Box>
  );
};

export default Card;
