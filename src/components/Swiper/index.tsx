import React, { useState, useEffect } from "react";

import { SwiperItem } from "../SwiperItem";

import { ReactComponent as SadIcon } from "@/assets/icons/forcards/harm-disappointed-face.svg";

const mockSwiperData = [
  {
    heading: "Very poor air",
    subheading: "Air Quality tip",
    icon: <SadIcon />,
    question: "WHY AND WHAT TO DO?",
    text: "Health warnings of emergency conditions. The entire population is more likely to be affected.",
    parameter: "air_quality",
    color: "red"
  },
  {
    heading: "Very poor air_1",
    subheading: "Air Quality tip_1",
    icon: <SadIcon />,
    question: "WHY AND WHAT TO DO?_1",
    text: "Health warnings of emergency conditions. The entire population is more likely to be affected._1",
    parameter: "humidity",
    color: "orange"
  },
  {
    heading: "Very poor air_2",
    subheading: "Air Quality tip_2",
    icon: <SadIcon />,
    question: "WHY AND WHAT TO DO?_2",
    text: "Health warnings of emergency conditions. The entire population is more likely to be affected._1",
    parameter: "pressure",
    color: "green"
  }
];

const INTERVAL = 3000;
const INITIAL_CURRENT_INDEX = 0;

export const Swiper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(INITIAL_CURRENT_INDEX);

  const currentItem = mockSwiperData?.[currentIndex];
  const { heading, subheading, icon, question, text, parameter, color } = currentItem || {};

  useEffect(() => {
    const evaluateNextCurrentIndex = (currentIndex: number) => {
      if (currentIndex < mockSwiperData.length - 1) {
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
  }, []);

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
