import { FC, useState } from "react";
import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { getCutText } from "@Helpers";
import { LETTERS_LIMIT } from "@Constants";
import { CardResizerButton } from "./CardResizerButton";

type CardTextContentProps = {
  subheading: string;
  text: string;
}

export const CardTextContent: FC<CardTextContentProps> = ({ subheading, text }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { t } = useTranslation();

  const { isTextCut, cutText } = getCutText(text, LETTERS_LIMIT);
  const cardText = isCardOpen ? text : cutText;
  const cardButtonText = t(isCardOpen ? "pages.map.cards.buttons.hide" : "pages.map.cards.buttons.see_more");

  const toggleCard = () => {
    setIsCardOpen((prevState) => !prevState);
  };

  return (
    <>
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
        { isTextCut && <CardResizerButton toggleCard={toggleCard} text={cardButtonText} /> }
      </Text>
    </>
  );
};
