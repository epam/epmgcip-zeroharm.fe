import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Parameter, type Parameters, type AirComponents, ParametersMap, AirComponentsMap} from "@Constants";

interface IDataStore {
  location: string;
  language: string;
  isFormModalActive: boolean;
  parameter: Parameter | null;
  parameters: Parameters,
  fetchingDate: string;
  airComponents: AirComponents;
  setLocation: (location: string) => void;
  setLanguage: (language: string) => void;
  toggleIsFormModalActive: () => void;
  setParameter: (parameter: Parameter) => void;
  setParameters: (parameters: Parameters) => void;
  setAirComponents: (airComponents: AirComponents) => void;
  setFetchingDate: (date: string) => void;
}

const parametersInitial = {
  [ParametersMap.AIR_QUALITY]: 0,
  [ParametersMap.HUMIDITY]: 0,
  [ParametersMap.PRESSURE]: 0
};

const airComponentsInitial = {
  [AirComponentsMap.PARTICULATE_MATTER_2_5]: 0,
  [AirComponentsMap.PARTICULATE_MATTER_10]: 0,
  [AirComponentsMap.NITROGEN_DIOXIDE]: 0,
  [AirComponentsMap.CARBON_MONOXIDE]: 0,
  [AirComponentsMap.OZONE]: 0,
  [AirComponentsMap.SULFUR_DIOXIDE]: 0
};

export const useDataStore = create<IDataStore>()(
  persist(
    (set) => ({
      location: "",
      language: "",
      isFormModalActive: false,
      parameter: null,
      parameters: parametersInitial,
      airComponents: airComponentsInitial,
      fetchingDate: "",
      setLocation: (location) => set({ location }),
      setLanguage: (language) => set({ language }),
      toggleIsFormModalActive: () => set((state) => ({ isFormModalActive: !state.isFormModalActive })),
      setParameter: (parameter) => set({ parameter }),
      setParameters: (parameters) => set({ parameters }),
      setAirComponents: (airComponents) => set({ airComponents }),
      setFetchingDate: (fetchingDate) => set({ fetchingDate })
    }),
    {
      name: "language",
      partialize: (state) => ({ language: state.language })
    }
  )
);
