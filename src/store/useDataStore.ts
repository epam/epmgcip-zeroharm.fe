import { create } from "zustand";
import { persist } from "zustand/middleware";

type ParametersType = {
  "air_quality": number,
  "humidity": number,
  "pressure": number
};

type AirComponentsType = {
  "PM2.5": number,
  "PM10": number,
  "NO2": number,
  "CO": number,
  "O3": number,
  "SO2": number
};

interface IDataStore {
  location: string;
  language: string;
  isFormModalActive: boolean;
  parameter: string;
  parameters: ParametersType,
  fetchingDate: string;
  airComponents: AirComponentsType;
  setLocation: (location: string) => void;
  setLanguage: (language: string) => void;
  toggleIsFormModalActive: () => void;
  setParameter: (parameter: string) => void;
  setParameters: (parameters: ParametersType) => void;
  setAirComponents: (airComponents: AirComponentsType) => void;
  setFetchingDate: (date: string) => void;
}

const parametersInitial = {
  "air_quality": 0,
  "humidity": 0,
  "pressure": 0
};

const airComponentsInitial = {
  "PM2.5": 0,
  "PM10": 0,
  "NO2": 0,
  "CO": 0,
  "O3": 0,
  "SO2": 0
};

export const useDataStore = create<IDataStore>()(
  persist(
    (set) => ({
      location: "",
      language: "",
      isFormModalActive: false,
      parameter: "",
      parameters: parametersInitial,
      fetchingDate: "",
      airComponents: airComponentsInitial,
      setLocation: (location: string) => set({ location }),
      setLanguage: (language: string) => set({ language }),
      toggleIsFormModalActive: () => set((state) => ({ isFormModalActive: !state.isFormModalActive })),
      setParameter: (parameter: string) => set({ parameter }),
      setParameters: (parameters: ParametersType) => set({ parameters }),
      setAirComponents: (airComponents: AirComponentsType) => set({ airComponents }),
      setFetchingDate: (fetchingDate: string) => set({ fetchingDate })
    }),
    {
      name: "language",
      partialize: (state) => ({ language: state.language })
    }
  )
);
