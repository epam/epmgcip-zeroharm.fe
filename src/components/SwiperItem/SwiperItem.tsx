/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { ReactComponent as RightArrow } from "@Assets/icons/stroke/harm-arrow-right.svg";
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
      maxWidth={{base: "100%", lg: "400"}}
    >
      <Card
        heading={heading}
        subheading={subheading}
        iconName={iconName}
        color={color}
      >
        <Text
          fontWeight="700"
          textTransform="uppercase"
          fontSize={{base: "tiny", md: "small"}}
          lineHeight={{base: "tiny", md: "small"}}
        >
          { question }
        </Text>
        <Text
          fontSize={{base: "small", md: "medium"}}
          lineHeight={{base: "small", md: "medium"}}
          sx={{
            overflow: "hidden",
            whiteSpace: "pre-wrap",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "7"
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
            gap="8px"
          >
            <Text
              fontWeight="700"
              fontSize={{base: "small"}}
              lineHeight={{base: "small"}}
            >
              { t("detailed_info") }
            </Text>
            <Icon
              width="20px"
              height="20px"
              as={RightArrow}
            />
          </Flex>
        </Link>
      </Card>
    </Box>
  );
};
