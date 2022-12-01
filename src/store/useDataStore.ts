import create from "zustand";

interface IDataStore {
  selectedLocation: string;
  setSelectedLocation: (selectedLocation: string) => void;
}

export const useDataStore = create<IDataStore>((set) => ({
  selectedLocation: "",
  setSelectedLocation: (selectedLocation: string) => set({ selectedLocation }),
}));
