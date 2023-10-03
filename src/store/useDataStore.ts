import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Parameter, type Parameters, type AirComponents, DEFAULT_LOCATION_ID } from "@Constants";

interface IDataStore {
  locationId: string;
  availableLocationIds: string[];
  language: string;
  isFormModalActive: boolean;
  parameter: Parameter | null;
  parameters: Parameters,
  airComponents: AirComponents;
  fetchingDate: string;
  setLocationId: (locationId: string) => void;
  setLanguage: (language: string) => void;
  toggleIsFormModalActive: () => void;
  setParameter: (parameter: Parameter) => void;
  setParameters: (parameters: Parameters) => void;
  setAirComponents: (airComponents: AirComponents) => void;
  setFetchingDate: (date: string) => void;
}

const parametersInitial: Parameters = {
  "air_quality": 0,
  "humidity": 0,
  "pressure": 0
};

const airComponentsInitial: AirComponents = {
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
      locationId: DEFAULT_LOCATION_ID,
      availableLocationIds: [DEFAULT_LOCATION_ID],
      language: "",
      isFormModalActive: false,
      parameter: null,
      parameters: parametersInitial,
      airComponents: airComponentsInitial,
      fetchingDate: "",
      setLocationId: (locationId) => set({ locationId }),
      setLanguage: (language: string) => set({ language }),
      toggleIsFormModalActive: () => set((state) => ({ isFormModalActive: !state.isFormModalActive })),
      setParameter: (parameter) => set({ parameter }),
      setParameters: (parameters) => set({ parameters }),
      setAirComponents: (airComponents) => set({ airComponents }),
      setFetchingDate: (fetchingDate: string) => set({ fetchingDate })
    }),
    {
      name: "language",
      partialize: (state) => ({ language: state.language })
    }
  )
);
