/* eslint-disable no-unused-vars */
export type AirComponent = "PM2.5" | "PM10" | "NO2" | "CO" | "O3" | "SO2";
export type AirComponentAlias = "pm2_5" | "pm10" | "nitrogen_dioxide" | "carbon_monoxide" | "ozone" | "sulfur_dioxide";
export type AirComponents = Record<AirComponent, number>;

export const airComponentsList: AirComponent[] = ["PM2.5", "PM10", "NO2", "CO", "O3", "SO2"];

export const airComponentsAliasesMap: Record<AirComponent, AirComponentAlias> = {
  "PM2.5": "pm2_5",
  "PM10": "pm10",
  "NO2": "nitrogen_dioxide",
  "CO": "carbon_monoxide",
  "O3": "ozone",
  "SO2": "sulfur_dioxide"
};

export enum AirComponentsMap {
  "PARTICULATE_MATTER_2_5" = "PM2.5",
  "PARTICULATE_MATTER_10" = "PM10",
  "NITROGEN_DIOXIDE" = "NO2",
  "CARBON_MONOXIDE" = "CO",
  "OZONE" = "O3",
  "SULFUR_DIOXIDE" = "SO2",
};

