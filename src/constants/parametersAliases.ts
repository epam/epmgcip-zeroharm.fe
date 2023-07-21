type ParametersAliasesType = {
  air_quality: "aqi",
  humidity: "humidity",
  pressure: "air_pressure"
};

export const parametersAliases: ParametersAliasesType = {
  air_quality: "aqi",
  humidity: "humidity",
  pressure: "air_pressure",
};

export type ParametersAliasesKeyType = keyof typeof parametersAliases;
