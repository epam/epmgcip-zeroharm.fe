import { FC } from "react";
import { TabPanel, TabPanels } from "@chakra-ui/react";
import { browserInfo } from "@Helpers";
import { GroupingCard} from "@UI";
import { IndexDate } from "../IndexDate/IndexDate";
import { Indicators } from "../Indicators/Indicators";

type TabPanelsContentProps = {
  isScrollVisible: boolean;
  tabs: any[]
}

const { isFirefox } = browserInfo;

export const TabPanelsContent: FC<TabPanelsContentProps> = ({ isScrollVisible, tabs }) => {
  const tabPanelsToRender = tabs.map(({ tabId }) => (
    <TabPanel
      key={tabId}
      display="flex"
      flexDirection="column"
      gap="16px"
      p="0"
    >
      <GroupingCard cardsKey={tabId} />
      <IndexDate />
      { tabId === "air_quality" && <Indicators /> }
    </TabPanel>
  ));

  return (
    <TabPanels
      maxW={{
        base: "343px",
        md: "327px",
        lg: isScrollVisible ? (isFirefox ? "387px" : "392px") : "396px"
      }}
      mx={{ base: "auto", md: "0px" }}
    >
      { tabPanelsToRender }
    </TabPanels>
  );
};
