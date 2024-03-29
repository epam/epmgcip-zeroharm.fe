import { FC } from "react";
import { TabPanels } from "@chakra-ui/react";
import { browserInfo } from "@Helpers";
import { TabPanel } from "./TabPanel";

type TabPanelsContentProps = {
  isContentOverflowing: boolean;
  tabs: any[]
}

const { isFirefox } = browserInfo;

export const TabPanelsContent: FC<TabPanelsContentProps> = ({ isContentOverflowing, tabs }) => (
  <TabPanels
    maxW={{
      base: "343px",
      md: "327px",
      lg: isContentOverflowing ? (isFirefox ? "387px" : "392px") : "396px"
    }}
    mx={{ base: "auto", md: "0px" }}
  >
    {
      tabs.map(({ tabId }) => (
        <TabPanel
          key={tabId}
          currentParameter={tabId}
        />
      ))
    }
  </TabPanels>
);
