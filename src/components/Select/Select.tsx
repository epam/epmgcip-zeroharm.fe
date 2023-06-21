import { useState} from "react";
import {
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ReactComponent as IconMapPoint } from "@/assets/icons/stroke/harm-local-two.svg";
import { useTranslationValues } from "@/hooks/useTranslationValues";
import { t } from "i18next";
import { BaseSelect } from "../BaseSelect/BaseSelect";

const selectStyleConfig = {
  container: {
    cursor: 'auto'
  },
  control: {
    cursor: 'auto !important',
    opacity: '1 !important',
  },
  dropdownIndicator: {
    display: 'none'
  },
  inputContainer: {
    paddingLeft: '30px'
  },
  placeholder: {
    paddingLeft: '30px'
  },
  singleValue: {
    paddingLeft: '30px'
  }
}

export const Select: React.FC = () => {
  const defaultAddress = t("locations.tash_navoi");
  const locations = useTranslationValues("locations");

  return (
    <InputGroup mt="8px" zIndex="1">
      <InputLeftElement
        color="gray.400"
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
