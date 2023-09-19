import { useState, FC } from "react";
import { Box } from "@chakra-ui/react";
import { Card } from "./Card";
import { getCardData } from "@Helpers";
import { useParameterData } from "@Hooks";
import { CardStep } from "./CardStep";
import { CardNavigation } from "./CardNavigation";
import { CardNavigationBox } from "./CardNavigationBox";
import { CardTextContent } from "./CardTextContent";
import { ReactComponent as RightArrowIcon } from "@Assets/icons/stroke/harm-arrow-right.svg";
import { ReactComponent as LeftArrowIcon } from "@Assets/icons/stroke/harm-arrow-left.svg";

type GroupingCardProps = {
  cardsKey?: any;
};

export const GroupingCard: FC<GroupingCardProps> = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const { parameter, currentParameterValue } = useParameterData();

  if (!parameter) return null;

  const card = getCardData(currentParameterValue, parameter);

  const { heading, subheading, tip, text, cardColor, iconName } = card;

  const cards = [card];
  const isCardsGroup = cards.length > 1;
  const isLeftActive = cardIndex > 0;
  const isRightActive = cardIndex < cards.length - 1;
  const cardStep = `${cardIndex + 1} / ${cards.length}`;

  const handleClick = (value: number) => {
    setCardIndex((previous: number) => previous + value);
  };

  return (
    <Box position="relative">
      {
        isCardsGroup && (
          <CardStep>
            { cardStep }
          </CardStep>
        )
      }
      <Card
        heading={heading}
        subheading={tip}
        color={cardColor}
        iconName={iconName}
        minH={isCardsGroup ? "290px" : "none"}
      >
        <CardTextContent subheading={subheading} text={text} />
      </Card>
      {
        isCardsGroup && (
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
        )
      }
    </Box>
  );
};
