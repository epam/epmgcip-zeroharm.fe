import { FC } from "react";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BaseSelect } from "../BaseSelect/BaseSelect";
import { resolveTranslationPath } from "@/helpers";
import { locationsData } from "@/constants";
import { ReactComponent as IconMapPoint } from "@/assets/icons/stroke/harm-local-two.svg";

const selectStyleConfig = {
  container: {
    cursor: "auto",
    width: "100%"
  },
  control: {
    cursor: "auto !important",
    opacity: "1 !important"
  },
  dropdownIndicator: {
    display: "none"
  },
  inputContainer: {
    paddingLeft: "30px"
  },
  placeholder: {
    paddingLeft: "30px"
  },
  singleValue: {
    paddingLeft: "30px"
  }
};

export const LocationSelect: FC = () => {
  const locationOptions = locationsData.map(locationData => resolveTranslationPath(locationData));
  const defaultAddress = locationOptions.find(({ locationId }) => locationId === "tash_furkata")?.locationName;
  const locations = locationOptions.map(({ locationName }) => ({
    label: locationName,
    value: locationName
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
