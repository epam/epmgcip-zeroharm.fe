import create from "zustand";
import { persist } from "zustand/middleware";

interface IDataStore {
  location: string;
  language: string;
  parameter: string;
  setLocation: (location: string) => void;
  setLanguage: (language: string) => void;
  setParameter: (parameter: string) => void;
}

export const useDataStore = create<IDataStore>()(
  persist(
    (set) => ({
      location: "",
      language: "",
      parameter: "",
      setLocation: (location: string) => set({ location }),
      setLanguage: (language: string) => set({ language }),
      setParameter: (parameter: string) => set({ parameter })
    }),
    {
      name: "language",
      partialize: (state) => ({ language: state.language }),
    }
  )
);
