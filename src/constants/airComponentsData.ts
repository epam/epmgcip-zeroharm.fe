export type AirComponent = "PM2.5" | "PM10" | "NO2" | "CO" | "O3" | "SO2";
export type AirComponents = Record<AirComponent, number>;

export const airComponentsNamesList: AirComponent[] = ["PM2.5", "PM10", "NO2", "CO", "O3", "SO2"];
