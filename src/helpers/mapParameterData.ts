import { AirComponents, Parameters } from "@Constants";

type ParametersAndAirComponents = {
  parameters: Parameters;
  airComponents: AirComponents;
  stationId: any;
}

export const mapParameterData = (data: any): ParametersAndAirComponents => {
  const {
    aqi,
    humidity,
    air_pressure,
    pm2_5,
    pm10,
    nitrogen_dioxide,
    carbon_monoxide,
    ozone,
    sulfur_dioxide,
    station_id
  } = data || {};

  return {
    parameters: {
      "air_quality": aqi ?? 0,
      "humidity": humidity ?? 0,
      "pressure": air_pressure ?? 0

    },
    airComponents: {
      "PM2.5": pm2_5 ?? 0,
      "PM10": pm10 ?? 0,
      "NO2": nitrogen_dioxide ?? 0,
      "CO": carbon_monoxide ?? 0,
      "O3": ozone ?? 0,
      "SO2": sulfur_dioxide ?? 0
    },
    "stationId": station_id
  };
};
