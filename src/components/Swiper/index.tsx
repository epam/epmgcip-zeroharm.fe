import { useState, useEffect, FC } from "react";
import { SwiperItem } from "../SwiperItem";
import { useParameterData } from "@/hooks";
import { ParametersAliasesKeyType } from "@/constants";
import { getCardData, getSubString } from "@/helpers";

const INTERVAL = 3000;
const INITIAL_CURRENT_INDEX = 0;

export const Swiper: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(INITIAL_CURRENT_INDEX);
  const { parameters } = useParameterData();

  const cardsData = Object.entries(parameters)?.map(([ key, value ]) => {
    return getCardData(value, key as ParametersAliasesKeyType);
  });
  const currentItem = cardsData?.[currentIndex];
  const { heading, subheading, tip, text, iconName, parameter, cardColor } = currentItem;
  const firstSentence = getSubString(text);

  useEffect(() => {
    const evaluateNextCurrentIndex = (currentIndex: number) => {
      if (currentIndex < cardsData.length - 1) {
        return ++currentIndex;
      }

      return INITIAL_CURRENT_INDEX;
    };

    const updateCurrentIndex = () => {
      setCurrentIndex(evaluateNextCurrentIndex);
    };

    let intervalId: ReturnType<typeof setInterval> | undefined;

    if (cardsData.length) {
      intervalId = setInterval(updateCurrentIndex, INTERVAL);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [cardsData.length]);

  return (
    <SwiperItem
      heading={heading}
      subheading={tip}
      iconName={iconName}
      question={subheading}
      text={firstSentence}
      parameter={parameter}
      color={cardColor}
    />
  );
};
