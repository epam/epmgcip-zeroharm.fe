import { FC } from "react";
import { SwiperItem } from "../SwiperItem/SwiperItem";
import { useParameterData, useSwiper } from "@Hooks";
import { LETTERS_LIMIT_SWIPER, ParametersAliasesKeyType } from "@Constants";
import { getCardData, getCutText } from "@Helpers";

export const Swiper: FC = () => {
  const { parameters } = useParameterData();

  const cardsData = Object.entries(parameters)?.map(([ key, value ]) => {
    return getCardData(value, key as ParametersAliasesKeyType);
  });

  const currentIndex = useSwiper(cardsData?.length);

  const currentItem = cardsData?.[currentIndex];
  const { heading, subheading, tip, text, iconName, parameter, cardColor } = currentItem;

  const { cutText: cardText } = getCutText(text, LETTERS_LIMIT_SWIPER);

  return (
    <SwiperItem
      heading={heading}
      subheading={tip}
      iconName={iconName}
      question={subheading}
      text={cardText}
      parameter={parameter}
      color={cardColor}
    />
  );
};
