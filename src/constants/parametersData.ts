/* eslint-disable no-unused-vars */
export type Parameter = "air_quality" | "humidity" | "pressure";
export type ParameterAlias = "aqi" | "humidity" | "air_pressure";
export type Parameters = Record<Parameter, number>;

export const parametersAliasesMap: Record<Parameter, ParameterAlias> = {
  "air_quality": "aqi",
  humidity: "humidity",
  pressure: "air_pressure"
};

export enum ParametersMap {
  AIR_QUALITY = "air_quality",
  HUMIDITY = "humidity",
  PRESSURE = "pressure",
};
