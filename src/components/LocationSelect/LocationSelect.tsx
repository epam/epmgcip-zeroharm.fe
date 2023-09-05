import { FC } from "react";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BaseSelect } from "../BaseSelect/BaseSelect";
import { resolveTranslationPath } from "@Helpers";
import { locationsData } from "@Constants";
import { ReactComponent as IconMapPoint } from "@Assets/icons/stroke/harm-local-two.svg";

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
    <InputGroup
      zIndex="1"
      pr="4px"
    >
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
