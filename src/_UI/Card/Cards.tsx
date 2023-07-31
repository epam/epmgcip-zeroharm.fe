import { useState, ReactNode, FC, useEffect } from "react";
import { Flex, Box, chakra, Text } from "@chakra-ui/react";
import translations from "@/i18n/locales/en/translations.json";

import { ReactComponent as RightArrowIcon } from "@/assets/icons/stroke/harm-arrow-right.svg";
import { ReactComponent as LeftArrowIcon } from "@/assets/icons/stroke/harm-arrow-left.svg";
import Card from "./Card";

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
    zIndex: "100",
  },
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
          cursor: "pointer",
        },
      }}
    >
      {children}
    </chakra.div>
  );
};

const CardNavigationBox: FC<{ children?: ReactNode; jc?: string }> = ({
  children,
  jc,
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent={jc}
      boxSize="56px"
      position="relative"
    >
      {children}
    </Flex>
  );
};

const Cards: FC<CardsType> = ({ cardsKey }) => {
  const cardsTrans: any = translations?.cards;
  const cards = cardsTrans[cardsKey];
  const [cardIndex, setCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(cards[cardIndex]);

  useEffect(() => {
    setCurrentCard(cards[cardIndex]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardIndex]);

  const isNavigation = cards.length > 0;
  const isLeftActive = cardIndex > 0;
  const isRightActive = cardIndex < cards.length - 1;

  const handleClick = (value: number) => {
    setCardIndex((previous: number) => previous + value);
  };

  return (
    <Box position="relative">
      {isNavigation && (
        <CardStep>
          {cardIndex + 1} / {cards.length}
        </CardStep>
      )}
      <Card
        heading={currentCard?.title}
        subheading={currentCard?.subtitle}
        color="red"
        icon={currentCard?.icon}
        height={isNavigation ? "290px" : "auto"}
      >
        <Text fontWeight="700">WHY AND WHAT TO DO?</Text>
        <Text>
          Health warnings of emergency conditions. The entire population is more
          likely to be affected.
        </Text>
      </Card>
      {isNavigation && (
        <CardNavigation>
          <CardNavigationBox jc="flex-start">
            {isLeftActive && <LeftArrowIcon onClick={() => handleClick(-1)} />}
          </CardNavigationBox>
          <CardNavigationBox jc="flex-end">
            {isRightActive && (
              <RightArrowIcon onClick={() => handleClick(+1)} />
            )}
          </CardNavigationBox>
        </CardNavigation>
      )}
    </Box>
  );
};

export default Cards;
