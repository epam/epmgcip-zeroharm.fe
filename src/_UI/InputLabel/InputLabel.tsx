import { Box, FormLabel, Flex, Tooltip, Text } from "@chakra-ui/react";
import { ReactComponent as QuestionMark } from "@/assets/icons/stroke/harm-question.svg";

type InputLabelProps = {
  tooltipText: string;
  label: string;
  htmlFor: string;
  response: boolean;
}

export const InputLabel:  React.FC<InputLabelProps> = (props) => {
  const { tooltipText, label, htmlFor, response } = props;

  return (
    <Flex mb={2} align={"center"}>
      <Tooltip
        label={tooltipText}
        hasArrow
        placement="right-start"
        variant="light"
      >
        <Box w="6" mr="2" opacity=".5">
          <QuestionMark style={{ width: 20, height: 20 }} />
        </Box>
      </Tooltip>
      <FormLabel mr={0} mb={0} htmlFor={htmlFor}>
        {label}
      </FormLabel>
      {response && <Text color="red">*</Text>}
    </Flex>
  );
};
