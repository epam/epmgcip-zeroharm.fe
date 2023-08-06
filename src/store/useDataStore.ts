import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IParametersValues {
  air_pressure: number | null;
  aqi: number | null;
  carbon_monoxide: number | null;
  humidity: number | null;
  last_update: Date | null;
  nitrogen_dioxide: number | null;
  ozone: number | null;
  pm2_5: number | null;
  pm10: number | null;
  station_id: number | null;
  sulfur_dioxide: number | null;
}

interface IDataStore {
  location: string;
  language: string;
  parameter: string;
  parametersValues: IParametersValues,
  setLocation: (location: string) => void;
  setLanguage: (language: string) => void;
  setParameter: (parameter: string) => void;
  setParametersValues: (parametersValues: IParametersValues) => void
}

const initialValues: IParametersValues = {
  air_pressure: null,
  aqi: null,
  carbon_monoxide: null,
  humidity: null,
  last_update: null,
  nitrogen_dioxide: null,
  ozone: null,
  pm2_5: null,
  pm10: null,
  station_id: null,
  sulfur_dioxide: null
};

export const useDataStore = create<IDataStore>()(
  persist(
    (set) => ({
      location: "",
      language: "",
      parameter: "",
      parametersValues: initialValues,
      setLocation: (location: string) => set({ location }),
      setLanguage: (language: string) => set({ language }),
      setParameter: (parameter: string) => set({ parameter }),
      setParametersValues: (parametersValues: IParametersValues) => set({ parametersValues })
    }),
    {
      name: "language",
      partialize: (state) => ({ language: state.language })
    }
  )
);
