/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { t } from "i18next";
import { useDataStore } from "@Store/useDataStore";
import { Card, CardType } from "@UI";
import { useDetectWidth } from "@Hooks";
import { ReactComponent as RightArrow } from "@Assets/icons/stroke/harm-arrow-right.svg";

type SwiperItemDataT = CardType & {
  question: string;
  text: string;
  parameter: string;
};

export const SwiperItem: FC<SwiperItemDataT> = (props) => {
  const { setParameter } = useDataStore();

  const { isLargerThan600, isLargerThan1024 } = useDetectWidth();

  const { heading, subheading, question, iconName, text, parameter, color } = props;

  const cardHeightSmall = isLargerThan600 ? "238px" : "208px";
  const cardHeight = isLargerThan1024 ? "262px" : `${cardHeightSmall}`;

  return (
    <Box
      zIndex="10"
      maxWidth={{ base: "100%", lg: "400" }}
      pt={{base: "0px", lg: "87px"}}
    >
      <Card
        heading={heading}
        subheading={subheading}
        iconName={iconName}
        color={color}
        height={cardHeight}
      >
        <Text
          fontWeight="700"
          textTransform="uppercase"
          fontSize={{ base: "tiny", md: "small" }}
          lineHeight={{ base: "tiny", md: "small" }}
        >
          { question }
        </Text>
        <Text
          fontSize={{ base: "small", md: "medium" }}
          lineHeight={{ base: "small", md: "medium" }}
        >
          { text }
        </Text>
        <Link
          to="/map"
          onClick={() => setParameter(parameter)}
          style={{marginTop: "auto"}}
        >
          <Flex
            alignItems="center"
            justifyContent="flex-end"
            color="gray.950"
            gap="8px"
          >
            <Text
              fontWeight="700"
              fontSize={{ base: "small" }}
              lineHeight={{ base: "small" }}
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
