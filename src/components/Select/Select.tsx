import * as React from "react";
import {
  InputGroup,
  InputLeftElement,
  Select as ChakraSelect,
} from "@chakra-ui/react";
import { ReactComponent as IconMapPoint } from "@/assets/icons/stroke/harm-local-two.svg";
import { useDataStore } from "@/store/useDataStore";
import { useTranslationValues } from "@/hooks/useTranslationValues";
import { t } from "i18next";

export const Select: React.FC = () => {
  const { location, setLocation } = useDataStore();
  const locations = useTranslationValues("locations");
  const placeHolder = location || "Select location";
  const [defaultAddress] = React.useState<string>(
    t("locations.tash_navoi") || ""
  );

  return (
    <InputGroup mt="8px" pointerEvents="none">
      <InputLeftElement color="gray.400" children={<IconMapPoint />} />
      <ChakraSelect
        onChange={(e) => setLocation(e.target.value)}
        focusBorderColor="white"
        iconSize={"1"}
        defaultValue={defaultAddress}
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
