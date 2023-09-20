import { Parameter, ParametersMap } from "./parametersData";

type TabsRawData = {
  tabId: Parameter;
  tabName: {
    translationPath: string;
  }
}

export type TabsData = {
  tabId: Parameter;
  tabName: string;
}

export const tabsData: TabsRawData[] = [
  {
    tabId: ParametersMap.AIR_QUALITY,
    tabName: {
      translationPath: `tabs.${ParametersMap.AIR_QUALITY}`
    }
  },
  {
    tabId: ParametersMap.HUMIDITY,
    tabName: {
      translationPath: `tabs.${ParametersMap.HUMIDITY}`
    }
  },
  {
    tabId: ParametersMap.PRESSURE,
    tabName: {
      translationPath: `tabs.${ParametersMap.PRESSURE}`
    }
  }
];
