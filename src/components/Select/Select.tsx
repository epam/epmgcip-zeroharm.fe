import * as React from "react";
import {
  InputGroup,
  InputLeftElement,
  Select as ChakraSelect,
} from "@chakra-ui/react";
import { useDataStore } from "../../store/useDataStore";
import { ReactComponent as IconMapPoint } from "../../assets/icons/harm-map-point.svg";
import { locations } from "../../const/locations";

export const Select: React.FC = () => {
  const { selectedLocation, setSelectedLocation } = useDataStore();

  const placeHolder = selectedLocation || "Select location";
  return (
    <InputGroup mt="8px">
      <InputLeftElement pointerEvents="none" children={<IconMapPoint />} />
      <ChakraSelect
        placeholder={placeHolder}
        background="gray.700"
        focusBorderColor="white"
        border="none"
        style={{ paddingInlineStart: "40px" }}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        {locations?.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </ChakraSelect>
    </InputGroup>
  );
};
