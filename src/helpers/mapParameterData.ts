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
      "air_quality": aqi,
      "humidity": humidity,
      "pressure": air_pressure
    },
    airComponents: {
      "PM2.5": pm2_5,
      "PM10": pm10,
      "NO2": nitrogen_dioxide,
      "CO": carbon_monoxide,
      "O3": ozone,
      "SO2": sulfur_dioxide
    },
    "stationId": station_id
  };
};
