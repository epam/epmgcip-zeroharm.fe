import { FC } from "react";
import { Box, FormLabel, Flex, Tooltip, Text } from "@chakra-ui/react";
import { ReactComponent as QuestionMark } from "@/assets/icons/stroke/harm-question.svg";

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
      align={"center"}
    >
      <Tooltip
        label={tooltipText}
        hasArrow
        placement="right-start"
        variant="light"
      >
        <Box
          w="6"
          mr="2"
          opacity=".5"
        >
          <QuestionMark
            width="20px"
            height="20px"
          />
        </Box>
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
