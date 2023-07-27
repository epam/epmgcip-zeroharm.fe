import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Checkbox,
  Flex,
  Tooltip,
  Divider,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as QuestionMark } from "@/assets/icons/stroke/harm-question.svg";

type FormData = {
  name: string;
  email: string;
  feedback: string;
  response: boolean;
};

export const Form = () => {
  const {
    handleSubmit,
    register,
    watch,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values);
  };

  const watchResponse = watch("response", false);

  const required = (value?: string) => {
    return !value && getValues("response")
      ? "Fill in all the required fields to submit your feedback!"
      : true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Divider mb={4} borderColor="gray.700" />
      <FormControl isInvalid={Boolean(errors.name)} mb={2}>
        <Flex fontSize="16px">
          <Tooltip
            label="Write your name here"
            hasArrow
            placement="right-start"
            variant="default"
          >
            <Box w="6" mr="2" opacity=".5">
              <QuestionMark style={{ width: 20, height: 20 }} />
            </Box>
          </Tooltip>
          <FormLabel mr={0} htmlFor="name">
            Name
          </FormLabel>
          {watchResponse && <Text color="red">*</Text>}
        </Flex>
        <Input
          variant={"gray"}
          size="lg"
          id="name"
          placeholder="Mary"
          _placeholder={{ color: "gray.300", fontSize: "16px" }}
          {...register("name", {
            pattern: {
              value: /^[A-Za-z А-Яа-я]{2,50}$/,
              message: "Fill in the field correctly",
            },
            validate: {
              required,
            },
          })}
        />
        <Box h="6" pt="1">
          <FormErrorMessage mt="0">
            {errors.name && errors.name.message?.toString()}
          </FormErrorMessage>
        </Box>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.email)} mb={2}>
        <Flex fontSize="16px">
          <Tooltip
            label="Write your email here"
            hasArrow
            placement="right-start"
            variant="default"
          >
            <Box w="6" mr="2" opacity=".5">
              <QuestionMark style={{ width: 20, height: 20 }} />
            </Box>
          </Tooltip>
          <FormLabel mr={0} htmlFor="feedback">
            Email{" "}
          </FormLabel>
          {watchResponse && <Text color="red">*</Text>}
        </Flex>
        <Input
          variant={"gray"}
          size="lg"
          id="email"
          placeholder="mary@epam.com"
          _placeholder={{ color: "gray.300", fontSize: "16px" }}
          {...register("email", {
            minLength: 2,
            maxLength: 50,
            pattern: {
              value:
                /[A-Za-zА-Яа-я0-9_-]+@[A-Za-zА-Яа-я]+\.[A-Za-zА-Яа-я]{2,4}/g,
              message: "Fill in the field correctly",
            },
            validate: {
              required,
            },
          })}
        />
        <Box h="6" pt="1">
          <FormErrorMessage mt="0">
            {errors.email && errors.email.message?.toString()}
          </FormErrorMessage>
        </Box>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.feedback)} mb={2}>
        <Flex fontSize="16px">
          <Tooltip
            label="We are glad to receive feedback from you! Write your feedback or suggestion here, use no more than 500 symbols!"
            hasArrow
            placement="right-start"
            variant="default"
          >
            <Box w="6" mr="2" opacity=".5">
              <QuestionMark style={{ width: 20, height: 20 }} />
            </Box>
          </Tooltip>
          <FormLabel mr={0} htmlFor="feedback">
            My feedback
          </FormLabel>
          <Text color="red">*</Text>
        </Flex>
        <Textarea
          h={100}
          bgColor="gray.700"
          border={0}
          focusBorderColor="white"
          id="feedback"
          placeholder="Write your feedback or suggestion here"
          _placeholder={{ color: "gray.300", fontSize: "16px" }}
          {...register("feedback", {
            pattern: {
              value:
                /[A-Za-zА-Яа-я0-9 !@~#$№%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,500}/g,
              message: "Fill in the field correctly",
            },
            required:
              "Fill in all the required fields to submit your feedback!",
          })}
        />
        <Box h="6" pt="1">
          <FormErrorMessage mt="0">
            {errors.feedback && errors.feedback.message?.toString()}
          </FormErrorMessage>
        </Box>
      </FormControl>
      <FormControl pb={4}>
        <Flex fontSize="16px">
          <Tooltip
            label="Check if you want to receive a response from our team"
            hasArrow
            placement="right-start"
            variant="default"
          >
            <Box w="6" mr="2" opacity=".5">
              <QuestionMark style={{ width: 20, height: 20 }} />
            </Box>
          </Tooltip>
          <Checkbox
            colorScheme="whiteAlpha"
            iconColor="black"
            size="lg"
            spacing="20px"
            id="response"
            {...register("response")}
            mr="2"
          />
          <FormLabel mr={0} mb={0} htmlFor="response">
            I want to get a response
          </FormLabel>
        </Flex>
      </FormControl>
      <Divider mb={4} borderColor="gray.700" />
      <Button isLoading={isSubmitting} type="submit" padding="16px 24px">
        Send feedback
      </Button>
    </form>
  );
};

export default Form;
