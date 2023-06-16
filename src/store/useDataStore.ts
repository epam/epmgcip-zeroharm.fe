import create from "zustand";
import { persist } from "zustand/middleware";

interface IDataStore {
  location: string;
  language: string;
  setLocation: (location: string) => void;
  setLanguage: (language: string) => void;
}

export const useDataStore = create<IDataStore>()(
  persist(
    (set) => ({
      location: "",
      language: "",
      setLocation: (location: string) => set({ location }),
      setLanguage: (language: string) => set({ language }),
    }),
    {
      name: "language",
      partialize: (state) => ({ language: state.language }),
    }
  )
);
