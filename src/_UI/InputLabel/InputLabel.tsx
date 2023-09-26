import { FC } from "react";
import { FormLabel, Flex, Tooltip, Text, Icon } from "@chakra-ui/react";
import { ReactComponent as Hint } from "@Assets/icons/stroke/harm-hint.svg";

type InputLabelProps = {
  tooltipText: string;
  label: string;
  htmlFor: string;
  required: boolean;
}

export const InputLabel: FC<InputLabelProps> = (props) => {
  const { tooltipText, label, htmlFor, required } = props;

  return (
    <Flex
      mb={2}
      align="center"
    >
      <Tooltip
        label={tooltipText}
        hasArrow
        placement="right-start"
        variant="light"
      >
        <Icon
          as={Hint}
          mr="10px"
          width="20px"
          height="20px"
          color="feedbackFormColor.hintIcon"
        />
      </Tooltip>
      <FormLabel
        mr={0}
        mb={0}
        htmlFor={htmlFor}
      >
        { label }
      </FormLabel>
      { required && (
        <Text color="red">*</Text>
      ) }
    </Flex>
  );
};
