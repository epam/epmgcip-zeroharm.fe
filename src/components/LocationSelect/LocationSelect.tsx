import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { t } from "i18next";
import { ReactComponent as IconMapPoint } from "@/assets/icons/stroke/harm-local-two.svg";
import { BaseSelect } from "../BaseSelect/BaseSelect";
import { getTranslationValues } from "@/helpers";

const selectStyleConfig = {
  container: {
    cursor: "auto",
  },
  control: {
    cursor: "auto !important",
    opacity: "1 !important",
  },
  dropdownIndicator: {
    display: "none",
  },
  inputContainer: {
    paddingLeft: "30px",
  },
  placeholder: {
    paddingLeft: "30px",
  },
  singleValue: {
    paddingLeft: "30px",
  },
};

export const LocationSelect: React.FC = () => {
  const defaultAddress = t("locations.tash_furkata");
  const locationValues = getTranslationValues("locations");
  const locations = locationValues.map((locationValue: string) => ({
    label: locationValue,
    value: locationValue,
  }));

  return (
    <InputGroup mt="8px" zIndex="1">
      <InputLeftElement
        color="gray.400"
        zIndex="3"
        children={<IconMapPoint />}
      />
      <BaseSelect
        defaultValue={defaultAddress}
        options={locations}
        styles={selectStyleConfig}
        isDisabled
      />
    </InputGroup>
  );
};
