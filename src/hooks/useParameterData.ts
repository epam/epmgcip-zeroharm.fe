import { useDataStore } from "@Store/useDataStore";

export const useParameterData = () => {
  const { parameter, parameters } = useDataStore();

  const currentParameterValue = parameter ? parameters[parameter] : 0;

  return {
    parameter,
    parameters,
    currentParameterValue
  };
};
