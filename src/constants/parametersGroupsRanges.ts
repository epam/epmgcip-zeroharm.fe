import { ParametersGroupsNames, type Parameter } from "@Constants";

type ParameterGroupRange = {
  groupName: ParametersGroupsNames,
  range: {
    min: number;
    max: number;
  }
}

export const airQualityGroupsRanges = [
  {
    groupName: ParametersGroupsNames.GREEN,
    range: {
      min: 0,
      max: 50
    }
  },
  {
    groupName: ParametersGroupsNames.YELLOW,
    range: {
      min: 51,
      max: 100
    }
  },
  {
    groupName: ParametersGroupsNames.ORANGE,
    range: {
      min: 101,
      max: 150
    }
  },
  {
    groupName: ParametersGroupsNames.LIGHT_RED,
    range: {
      min: 151,
      max: 300
    }
  },
  {
    groupName: ParametersGroupsNames.RED,
    range: {
      min: 301,
      max: 400
    }
  },
  {
    groupName: ParametersGroupsNames.PURPLE,
    range: {
      min: 401,
      max: 500
    }
  }
];

export const airPressureGroupsRanges = [
  {
    groupName: ParametersGroupsNames.BLUE,
    range: {
      min: 669,
      max: 754
    }
  },
  {
    groupName: ParametersGroupsNames.GREEN,
    range: {
      min: 755,
      max: 765
    }
  },
  {
    groupName: ParametersGroupsNames.RED,
    range: {
      min: 766,
      max: 812
    }
  }
];

export const humidityGroupsRanges = [
  {
    groupName: ParametersGroupsNames.RED,
    range: {
      min: 0,
      max: 39
    }
  },
  {
    groupName: ParametersGroupsNames.GREEN,
    range: {
      min: 40,
      max: 70
    }
  },
  {
    groupName: ParametersGroupsNames.BLUE,
    range: {
      min: 71,
      max: 100
    }
  }
];

export const parametersGroupsRanges: Record<Parameter, ParameterGroupRange[]> = {
  air_quality: airQualityGroupsRanges,
  pressure: airPressureGroupsRanges,
  humidity: humidityGroupsRanges
};
