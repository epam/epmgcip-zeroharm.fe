import * as React from "react";
import {
  InputGroup,
  InputLeftElement,
  Select as ChakraSelect,
} from "@chakra-ui/react";
import { ReactComponent as IconMapPoint } from "../../assets/icons/stroke/harm-local-two.svg";
import { useDataStore } from "../../store/useDataStore";
import { useTranslationKeys } from "../../hooks/useTranslationKeys";

export const Select: React.FC = () => {
  const { location, setLocation } = useDataStore();
  const locations = useTranslationKeys("locations");

  const placeHolder = location || "Select location";
  return (
    <InputGroup mt="8px">
      <InputLeftElement pointerEvents="none" children={<IconMapPoint />} />
      <ChakraSelect
        placeholder={placeHolder}
        bg="gray.700"
        focusBorderColor="white"
        border="none"
        style={{ paddingInlineStart: "40px" }}
        onChange={(e) => setLocation(e.target.value)}
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
