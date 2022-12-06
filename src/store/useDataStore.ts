import create from "zustand";

interface IDataStore {
  location: string;
  language: string;
  setLocation: (location: string) => void;
  setLanguage: (language: string) => void;
}

export const useDataStore = create<IDataStore>((set) => ({
  location: "",
  language: "",
  setLocation: (location: string) => set({ location }),
  setLanguage: (language: string) => set({ language }),
}));
