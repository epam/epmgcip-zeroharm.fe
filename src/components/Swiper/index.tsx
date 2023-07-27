import React, { useState, useEffect } from "react";
import { SwiperItem } from "../SwiperItem";
import { useDataStore } from "@/store/useDataStore";
import { indexesConfig, groupsColors, ParametersAliasesKeyType, GroupsColorsKeyType } from "@/constants";
import { t } from "i18next";

const INTERVAL = 3000;
const INITIAL_CURRENT_INDEX = 0;

export const Swiper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(INITIAL_CURRENT_INDEX);

  const { parametersValues } = useDataStore();

  const { aqi, air_pressure, humidity } = parametersValues;
  const isDataLoaded = Boolean(aqi || air_pressure || humidity);
  const mapValueToConfigName = {
    air_quality: aqi,
    pressure: air_pressure,
    humidity: humidity
  };

  const cardsData = Object.entries(mapValueToConfigName).map(([ key, value ]) => {
    const indexGroups = indexesConfig[key as ParametersAliasesKeyType];
    const rangeGroup = indexGroups.find(({ range }) => {
      const { min, max } = range;

      return min <= Number(value) && Number(value) <= max;
    });
    const isAbsoluteMax = Number(value) > indexGroups[indexGroups.length - 1].range.max;
    const outRangeGroup = isAbsoluteMax ? indexGroups[indexGroups.length - 1] : indexGroups[0];
    const group = rangeGroup || outRangeGroup;
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
      if (isDataLoaded && currentIndex < cardsData.length - 1) {
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
  }, [isDataLoaded, cardsData.length]);

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
