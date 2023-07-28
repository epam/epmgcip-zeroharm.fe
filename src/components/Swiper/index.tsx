import React, { useState, useEffect } from "react";
import { SwiperItem } from "../SwiperItem";
import { useDataStore } from "@/store/useDataStore";
import { groupsColors, ParametersAliasesKeyType, GroupsColorsKeyType } from "@/constants";
import { getParameterGroup } from "@/helpers";
import { t } from "i18next";

const INTERVAL = 3000;
const INITIAL_CURRENT_INDEX = 0;

type CardType = {
  heading: string,
  subheading: string,
  question: string,
  text: string,
  parameter: string,
  color: string,
  icon: string
}

export const Swiper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(INITIAL_CURRENT_INDEX);
  const [cardsData, setCardsData] = useState<CardType[] | []>([]);

  const { parametersValues } = useDataStore();

  const { aqi, air_pressure, humidity } = parametersValues;
  const isDataLoaded = Boolean(aqi || air_pressure || humidity);
  const currentItem = cardsData?.[currentIndex];
  const {
    heading,
    subheading,
    question,
    text,
    icon,
    parameter,
    color
  } = currentItem || {};

  useEffect(() => {
    const evaluateNextCurrentIndex = (currentIndex: number) => {
      if (cardsData.length && currentIndex < cardsData.length - 1) {
        return ++currentIndex;
      }

      return INITIAL_CURRENT_INDEX;
    };

    const updateCurrentIndex = () => {
      setCurrentIndex(evaluateNextCurrentIndex);
    };

    const intervalId = setInterval(updateCurrentIndex, INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [cardsData.length]);

  useEffect(() => {
    if (isDataLoaded) {
      const mapValueToConfigName = {
        air_quality: aqi,
        pressure: air_pressure,
        humidity: humidity
      };

      const cardsData = Object.entries(mapValueToConfigName).map(([ key, value ]) => {
        const group = getParameterGroup(Number(value), key as ParametersAliasesKeyType);
        const { headingTranslationPath, questionTranslationPath, textTranslationPath, groupName, icon } = group || {};

        return {
          heading: t(headingTranslationPath ?? ""),
          subheading: t(`tips.${key}`),
          question: t(questionTranslationPath ?? ""),
          text: t(textTranslationPath ?? ""),
          parameter: key,
          color: groupsColors[groupName as GroupsColorsKeyType],
          icon: icon || "harm-neutral-face"
        };
      });

      setCardsData(cardsData);
    }

  }, [isDataLoaded, aqi, air_pressure, humidity]);

  return (
    <SwiperItem
      heading={heading}
      subheading={subheading}
      icon={icon}
      question={question}
      text={text}
      parameter={parameter}
      color={color}
    />
  );
};
