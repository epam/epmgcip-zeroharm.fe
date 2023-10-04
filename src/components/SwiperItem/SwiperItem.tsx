import { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useDataStore } from "@Store/useDataStore";
import { Card, CardType } from "@UI";
import { useDetectWidth } from "@Hooks";
import { type Parameter } from "@Constants";
import { ReactComponent as RightArrow } from "@Assets/icons/stroke/harm-arrow-right.svg";

type SwiperItemDataT = CardType & {
  question: string;
  text: string;
  parameter: Parameter;
};

export const SwiperItem: FC<SwiperItemDataT> = (props) => {
  const { t } = useTranslation();
  const { setParameter } = useDataStore();

  const { isLargerThan600 } = useDetectWidth();

  const cardHeight = isLargerThan600 ? "285px" : "225px";

  const { heading, subheading, question, iconName, text, parameter, color } = props;

  return (
    <Box
      zIndex="10"
      maxWidth={{ base: "100%", lg: "400" }}
      pt={{ base: "0px", lg: "87px" }}
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
          noOfLines={7}
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
              fontSize="small"
              lineHeight="small"
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
