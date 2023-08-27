/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { BiRightArrowAlt } from "react-icons/bi";
import { Card, CardType } from "@UI";
import { useDataStore } from "@Store/useDataStore";

type SwiperItemDataT = CardType & {
  question: string;
  text: string;
  parameter: string;
};

export const SwiperItem: FC<SwiperItemDataT> = (props) => {
  const { setParameter } = useDataStore();

  const { heading, subheading, question, iconName, text, parameter, color } = props;

  return (
    <Box
      zIndex="10"
      maxWidth="400"
    >
      <Card
        heading={heading}
        subheading={subheading}
        iconName={iconName}
        color={color}
      >
        <Text fontWeight="700">{ question }</Text>
        <Text
          sx={{
            overflow: "hidden",
            whiteSpace: "pre-wrap",
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": "7"
          }}
        >
          { text }
        </Text>
        <Link
          to="/map"
          onClick={() => setParameter(parameter)}
        >
          <Flex
            alignItems="center"
            justifyContent="flex-end"
            color="gray.950"
          >
            <Text fontWeight="700">{ t("detailed_info") }</Text>
            <Icon
              width="40px"
              height="30px"
              as={BiRightArrowAlt}
            />
          </Flex>
        </Link>
      </Card>
    </Box>
  );
};
