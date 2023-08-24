import { useState, ReactNode, FC } from "react";
import { Flex, Box, Text, Button, chakra } from "@chakra-ui/react";
import { t } from "i18next";
import { Card } from "./Card";
import { LETTERS_LIMIT } from "@/constants";
import { getCardData, getCutText } from "@/helpers";
import { useParameterData } from "@/hooks";
import { ReactComponent as RightArrowIcon } from "@/assets/icons/stroke/harm-arrow-right.svg";
import { ReactComponent as LeftArrowIcon } from "@/assets/icons/stroke/harm-arrow-left.svg";

type CardsType = {
  cardsKey?: any;
};

const CardStep = chakra(Box, {
  baseStyle: {
    fontSize: "12px",
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

const Cards: FC<CardsType> = ({ cardsKey }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { currentParameterValue } = useParameterData();

  const card = getCardData(currentParameterValue, cardsKey);
  const { heading, subheading, tip, text, cardColor, iconName } = card;
  const isTextBig = text.length > LETTERS_LIMIT ? true : false;
  const cutText = getCutText(text);
  const preview = isTextBig ? cutText : text;
  const cardText = isCardOpen ? text : preview;
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
          casing={"uppercase"}
        >
          { subheading }
        </Text>
        <Text>
          { cardText }
          { " " }
          { isTextBig && (
            <Button variant="link" onClick={toggleCard}>
              { btnText }
            </Button>
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

export default Cards;
