import { useState, useEffect, FC } from "react";
import { SwiperItem } from "../SwiperItem";
import { useDataStore } from "@/store/useDataStore";
import { groupsColors, ParametersAliasesKeyType, GroupsColorsKeyType } from "@/constants";
import { getParameterGroup } from "@/helpers";
import { t } from "i18next";

const INTERVAL = 3000;
const INITIAL_CURRENT_INDEX = 0;

export const Swiper: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(INITIAL_CURRENT_INDEX);

  const { parametersValues } = useDataStore();

  const { aqi, air_pressure, humidity } = parametersValues;
  const mapValueToConfigName = {
    air_quality: aqi,
    pressure: air_pressure,
    humidity: humidity
  };
  const cardsData = Object.entries(mapValueToConfigName).map(([ key, value ]) => {
    const group = getParameterGroup(value, key as ParametersAliasesKeyType);
    const { headingTranslationPath, questionTranslationPath, textTranslationPath, groupName, icon } = group || {};

    return {
      heading: t(headingTranslationPath ?? ""),
      subheading: t(`tips.${key}`),
      question: t(questionTranslationPath ?? ""),
      text: t(textTranslationPath ?? ""),
      parameter: key,
      color: groupsColors[groupName as GroupsColorsKeyType] || "red",
      icon: icon || ""
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
      subheading={subheading}
      iconName={icon}
      question={question}
      text={text}
      parameter={parameter}
      color={color}
    />
  );
};
