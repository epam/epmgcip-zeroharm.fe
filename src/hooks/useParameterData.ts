import { useDataStore } from "@Store/useDataStore";

export const useParameterData = () => {
  const { parameter, parameters } = useDataStore();

  const currentParameterValue = Object.entries(parameters)?.find(([ key ]) => key === parameter)?.[1] ?? 0;

  return {
    parameter,
    parameters,
    currentParameterValue
  };
};
