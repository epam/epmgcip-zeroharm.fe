import { FC } from "react";
import { SwiperItem } from "../SwiperItem/SwiperItem";
import { useSwiper } from "@Hooks";
import { CardData, type Parameter } from "@Constants";
import { getCardData } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";

export const Swiper: FC = () => {
  const { parameters } = useDataStore();

  const cardsData = Object.entries(parameters)?.map(([ key, value ]) => {
    return getCardData(value, key as Parameter);
  });

  const currentIndex = useSwiper(cardsData?.length);

  const currentItem = cardsData?.[currentIndex] as CardData;
  const { heading, subheading, tip, text, iconName, parameter, cardColor } = currentItem;

  return (
    <SwiperItem
      heading={heading}
      subheading={tip}
      iconName={iconName}
      question={subheading}
      text={text}
      parameter={parameter}
      color={cardColor}
    />
  );
};
