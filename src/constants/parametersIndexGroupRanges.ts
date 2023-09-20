import { IndexesGroupsNames, type Parameter } from "@Constants";

type IndexGroupRange = {
  groupName: IndexesGroupsNames,
  range: {
    min: number;
    max: number;
  }
}

export const airQualityIndexConfig = [
  {
    groupName: IndexesGroupsNames.GREEN,
    range: {
      min: 0,
      max: 50
    }
  },
  {
    groupName: IndexesGroupsNames.YELLOW,
    range: {
      min: 51,
      max: 100
    }
  },
  {
    groupName: IndexesGroupsNames.ORANGE,
    range: {
      min: 101,
      max: 150
    }
  },
  {
    groupName: IndexesGroupsNames.LIGHT_RED,
    range: {
      min: 151,
      max: 300
    }
  },
  {
    groupName: IndexesGroupsNames.RED,
    range: {
      min: 301,
      max: 400
    }
  },
  {
    groupName: IndexesGroupsNames.PURPLE,
    range: {
      min: 401,
      max: 500
    }
  }
];

export const airPressureIndexConfig = [
  {
    groupName: IndexesGroupsNames.BLUE,
    range: {
      min: 669,
      max: 754
    }
  },
  {
    groupName: IndexesGroupsNames.GREEN,
    range: {
      min: 755,
      max: 765
    }
  },
  {
    groupName: IndexesGroupsNames.RED,
    range: {
      min: 766,
      max: 812
    }
  }
];

export const humidityIndexConfig = [
  {
    groupName: IndexesGroupsNames.RED,
    range: {
      min: 0,
      max: 39
    }
  },
  {
    groupName: IndexesGroupsNames.GREEN,
    range: {
      min: 40,
      max: 70
    }
  },
  {
    groupName: IndexesGroupsNames.BLUE,
    range: {
      min: 71,
      max: 100
    }
  }
];

export const parametersIndexGroupRanges: Record<Parameter, IndexGroupRange[]> = {
  air_quality: airQualityIndexConfig,
  pressure: airPressureIndexConfig,
  humidity: humidityIndexConfig
};
