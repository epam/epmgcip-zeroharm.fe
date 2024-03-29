import { type ParameterGroupName, parametersGroupsNames, type Parameter } from "@Constants";

type ParameterGroupRange = {
  groupName: ParameterGroupName,
  range: {
    min: number;
    max: number;
  }
}

const { GREEN, YELLOW, ORANGE, LIGHT_RED, RED, PURPLE, BLUE } = parametersGroupsNames;

export const airQualityGroupsRanges = [
  {
    groupName: GREEN,
    range: {
      min: 0,
      max: 50
    }
  },
  {
    groupName: YELLOW,
    range: {
      min: 51,
      max: 100
    }
  },
  {
    groupName: ORANGE,
    range: {
      min: 101,
      max: 150
    }
  },
  {
    groupName: LIGHT_RED,
    range: {
      min: 151,
      max: 300
    }
  },
  {
    groupName: RED,
    range: {
      min: 301,
      max: 400
    }
  },
  {
    groupName: PURPLE,
    range: {
      min: 401,
      max: 500
    }
  }
];

export const airPressureGroupsRanges = [
  {
    groupName: BLUE,
    range: {
      min: 669,
      max: 754
    }
  },
  {
    groupName: GREEN,
    range: {
      min: 755,
      max: 765
    }
  },
  {
    groupName: RED,
    range: {
      min: 766,
      max: 812
    }
  }
];

export const humidityGroupsRanges = [
  {
    groupName: RED,
    range: {
      min: 0,
      max: 39
    }
  },
  {
    groupName: GREEN,
    range: {
      min: 40,
      max: 70
    }
  },
  {
    groupName: BLUE,
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
