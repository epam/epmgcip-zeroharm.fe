import { FC } from "react";
import { TabPanel as ChakraTabPanel } from "@chakra-ui/react";
import { CardData, Parameter, ParametersMap } from "@Constants";
import { GroupingCard} from "@UI";
import { getCardData } from "@Helpers";
import { useParameterData } from "@Hooks";
import { ParameterIndexAndDate } from "../ParameterIndexAndDate/ParameterIndexAndDate";
import { AirQualityIndicators } from "../AirQualityIndicators/AirQualityIndicators";

type TabPanelProps = {
  currentParameter: Parameter;
}

export const TabPanel: FC<TabPanelProps> = ({ currentParameter }) => {
  const { currentParameterValue } = useParameterData(currentParameter);
  const card = getCardData(currentParameterValue, currentParameter) as CardData;
  const shouldDisplayAirQualityIndicators = currentParameter === ParametersMap.AIR_QUALITY;

  return (
    <ChakraTabPanel
      key={currentParameter}
      display="flex"
      flexDirection="column"
      gap="16px"
      p="0"
    >
      <GroupingCard cardData={card} />
      <ParameterIndexAndDate
        cardData={card}
        currentParameter={currentParameter}
        currentParameterValue={currentParameterValue}
      />
      { shouldDisplayAirQualityIndicators && <AirQualityIndicators /> }
    </ChakraTabPanel>
  );
};
