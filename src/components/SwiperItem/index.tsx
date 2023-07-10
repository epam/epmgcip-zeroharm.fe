/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";

import Card from "@UI/Card/Card";
import { useDataStore } from "@/store/useDataStore";


type SwiperItemDataT = {
  heading: string,
  subheading: string,
  icon: React.ReactNode,
  question: string,
  text: string,
  parameter: string,
  color: string
}

export const SwiperItem: React.FC<SwiperItemDataT> = (props) => {
  const {
    heading,
    subheading,
    question,
    icon,
    text,
    parameter,
    color
  } = props;

  const { setParameter } = useDataStore();

  return (
    <Box zIndex="10" maxWidth="400">
      <Card
        color={color}
        subheading={subheading}
        heading={heading}
        icon={icon}
      >
        <Text fontWeight="700">
          { question }
        </Text>
        <Text>
          { text }
        </Text>
        <Link
          to="/map"
          onClick={() => setParameter(parameter)}
        >
          <Flex alignItems="center" justifyContent="flex-end" color="gray.950">
            <Text fontWeight="700">Detailed Information</Text>
            <Icon width="40px" height="30px" as={BiRightArrowAlt} />
          </Flex>
        </Link>
      </Card>
    </Box>
  );
};
