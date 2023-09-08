import { useState, ReactNode, FC } from "react";
import { Flex, Box, Text, Button, chakra } from "@chakra-ui/react";
import { t } from "i18next";
import { Card } from "./Card";
import { LETTERS_LIMIT } from "@Constants";
import { getCardData, getCutText } from "@Helpers";
import { useParameterData } from "@Hooks";
import { ReactComponent as RightArrowIcon } from "@Assets/icons/stroke/harm-arrow-right.svg";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";

type CardsType = {
  cardsKey?: any;
};

const CardStep = chakra(Box, {
  baseStyle: {
    fontSize: "tiny",
    lineHeight: "16px",
    position: "absolute",
    top: "24px",
    right: "24px",
    zIndex: "100"
  }
});

const CardNavigation: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <chakra.div
      sx={{
        marginTop: "auto",
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        width: "100%",
        p: "0 28px",
        bottom: "14px",
        zIndex: "100",
        color: "gray.800",
        svg: {
          cursor: "pointer"
        }
      }}
    >
      { children }
    </chakra.div>
  );
};

const CardNavigationBox: FC<{ children?: ReactNode; jc?: string }> = ({
  children,
  jc
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent={jc}
      boxSize="56px"
      position="relative"
    >
      { children }
    </Flex>
  );
};

export const Cards: FC<CardsType> = ({ cardsKey }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { currentParameterValue } = useParameterData();

  const card = getCardData(currentParameterValue, cardsKey);
  const { heading, subheading, tip, text, cardColor, iconName } = card;
  const { isTextCut, cutText } = getCutText(text, LETTERS_LIMIT);
  const cardText = isCardOpen ? text : cutText;
  const btnText = t(isCardOpen ? "pages.map.cards.buttons.hide" : "pages.map.cards.buttons.see_more");

  const cards = [card];
  const isNavigation = cards.length > 1;
  const isLeftActive = cardIndex > 0;
  const isRightActive = cardIndex < cards.length - 1;

  const handleClick = (value: number) => {
    setCardIndex((previous: number) => previous + value);
  };

  const toggleCard = () => {
    setIsCardOpen((prevState) => !prevState);
  };

  return (
    <Box position="relative">
      { isNavigation && (
        <CardStep>
          { cardIndex + 1 } / { cards.length }
        </CardStep>
      ) }
      <Card
        heading={heading}
        subheading={tip}
        color={cardColor}
        iconName={iconName}
        height={isNavigation ? "290px" : "auto"}
      >
        <Text
          fontWeight="700"
          casing="uppercase"
          fontSize={{ base: "tiny", lg: "small" }}
          lineHeight={{ base: "tiny", lg: "small" }}
        >
          { subheading }
        </Text>
        <Text
          fontSize={{ base: "small", lg: "medium" }}
          lineHeight={{ base: "small", lg: "medium" }}
        >
          { cardText }
          { isTextCut && (
            <>
              { " " }
              <Button variant="link" onClick={toggleCard}>
                { btnText }
              </Button>
            </>
          ) }
        </Text>
      </Card>
      { isNavigation && (
        <CardNavigation>
          <CardNavigationBox jc="flex-start">
            { isLeftActive && (
              <LeftArrowIcon onClick={() => handleClick(-1)} />
            ) }
          </CardNavigationBox>
          <CardNavigationBox jc="flex-end">
            { isRightActive && (
              <RightArrowIcon onClick={() => handleClick(+1)} />
            ) }
          </CardNavigationBox>
        </CardNavigation>
      ) }
    </Box>
  );
};
