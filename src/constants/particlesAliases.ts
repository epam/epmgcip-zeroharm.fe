type ParticlesAliasesType = {
  "PM2.5": "pm2_5",
  "PM10": "pm10",
  "NO2": "nitrogen_dioxide",
  "CO": "carbon_monoxide",
  "O3": "ozone",
  "SO2": "sulfur_dioxide"
};

export const particlesAliases: ParticlesAliasesType = {
  "PM2.5": "pm2_5",
  "PM10": "pm10",
  "NO2": "nitrogen_dioxide",
  "CO": "carbon_monoxide",
  "O3": "ozone",
  "SO2": "sulfur_dioxide"
};

export type ParticlesAliasesKeyType = keyof typeof particlesAliases;
