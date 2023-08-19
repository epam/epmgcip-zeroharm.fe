import { FC } from "react";
import { SwiperItem } from "../SwiperItem";
import { useParameterData, useSwiper } from "@/hooks";
import { ParametersAliasesKeyType } from "@/constants";
import { getCardData } from "@/helpers";

export const Swiper: FC = () => {
  const { parameters } = useParameterData();

  const cardsData = Object.entries(parameters)?.map(([ key, value ]) => {
    return getCardData(value, key as ParametersAliasesKeyType);
  });

  const currentIndex = useSwiper(cardsData?.length);

  const currentItem = cardsData?.[currentIndex];
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
