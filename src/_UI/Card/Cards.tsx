import { useState, FC } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { t } from "i18next";
import { Card } from "./Card";
import { LETTERS_LIMIT } from "@Constants";
import { getCardData, getCutText } from "@Helpers";
import { useParameterData } from "@Hooks";
import { ReactComponent as RightArrowIcon } from "@Assets/icons/stroke/harm-arrow-right.svg";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";
import { CardStep } from "./CardStep";
import { CardNavigation } from "./CardNavigation";
import { CardNavigationBox } from "./CardNavigationBox";

type CardsType = {
  cardsKey?: any;
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
          <CardNavigationBox justifyContent="flex-start">
            { isLeftActive && (
              <LeftArrowIcon onClick={() => handleClick(-1)} />
            ) }
          </CardNavigationBox>
          <CardNavigationBox justifyContent="flex-end">
            { isRightActive && (
              <RightArrowIcon onClick={() => handleClick(+1)} />
            ) }
          </CardNavigationBox>
        </CardNavigation>
      ) }
    </Box>
  );
};
