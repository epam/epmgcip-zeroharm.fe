import { useDataStore } from "@Store/useDataStore";
import { Parameter } from "../constants";

export const useParameterData = (currentParameter: Parameter) => {
  const { parameters } = useDataStore();

  const currentParameterValue = currentParameter ? parameters[currentParameter] : 0;

  return {
    currentParameter,
    parameters,
    currentParameterValue
  };
};
