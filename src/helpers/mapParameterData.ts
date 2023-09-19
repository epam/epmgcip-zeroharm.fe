import { AirComponentsMap, ParametersMap } from "@Constants";

export const mapParameterData = (data: any) => {
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
      [ParametersMap.AIR_QUALITY]: aqi ?? 0,
      [ParametersMap.HUMIDITY]: humidity ?? 0,
      [ParametersMap.PRESSURE]: air_pressure ?? 0
    },
    airComponents: {
      [AirComponentsMap.PARTICULATE_MATTER_2_5]: pm2_5 ?? 0,
      [AirComponentsMap.PARTICULATE_MATTER_10]: pm10 ?? 0,
      [AirComponentsMap.NITROGEN_DIOXIDE]: nitrogen_dioxide ?? 0,
      [AirComponentsMap.CARBON_MONOXIDE]: carbon_monoxide ?? 0,
      [AirComponentsMap.OZONE]: ozone ?? 0,
      [AirComponentsMap.SULFUR_DIOXIDE]: sulfur_dioxide ?? 0
    },
    stationId: station_id
  };
};
