import React from "react";
import { Select } from "chakra-react-select";

const getSelectComponentStyleConfig = (styles: any) => (provided: any, state: any) => {
  const stylesWithState = Object.entries(styles).filter(([_, value]) => typeof value === "function");

  if (stylesWithState?.length) {
    const resolvedStyles = stylesWithState.map(([key, func]: [string, any]) => ([
        key,
        func(state)
      ])
    );
    const componentStyles = resolvedStyles.reduce((acc, [key, val]) => Object.assign(acc, { [key] : val }), {});

    return {
      ...provided,
      ...styles,
      ...componentStyles
    };
  }

  return {
    ...provided,
    ...styles
  };
};

const BaseSelectStyleConfig = {
  container: {
    bg: "gray.700",
    zIndex: "2"
  },
  menuList: {
    bg: "gray.700",
  },
  option: {
    bg: (state: any) => state.isFocused ? "gray.500" : "gray.700",
  },
  indicatorSeparator: {
    display: "none"
  },
  dropdownIndicator: {
    bg: "ray.700"
  }
};

type OptionT = {
  label: string,
  value: string
}

type SelectPropsT = {
  options: Array<OptionT>,
  defaultValue: string,
  styles?: object,
  isDisabled?: boolean,
  onChange?: (lang: any) => void
}

export const  BaseSelect: React.FC<SelectPropsT> = (props: SelectPropsT) => {
  const {
    defaultValue,
    options,
    styles,
    isDisabled,
    onChange
  } = props;
  const val = options.find(({ label, value }) => label === defaultValue || value === defaultValue);

  const mergeStyleConfigs = (newStyles: any) => {
    const styles: any = Object.assign({}, BaseSelectStyleConfig);

    return Object.keys(newStyles).reduce((acc, key: string) => ({
      ...acc,
      [key]: key in styles ? {
        ...styles[key],
        ...newStyles[key]
      } : {
        ...newStyles[key]
      }
    }), styles);
  };

  const selectStyles = Object.entries(mergeStyleConfigs(styles)).reduce((acc, [componentName, newStyles]) => Object.assign(acc, {
    [componentName]: getSelectComponentStyleConfig(newStyles)
  }), {});

  return (
    <Select
      options={options}
      value={val}
      chakraStyles={selectStyles}
      isDisabled={isDisabled}
      onChange={onChange}
    />
  );
};
