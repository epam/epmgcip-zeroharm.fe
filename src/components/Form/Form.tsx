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
} from "@chakra-ui/react";
import { ReactComponent as InfoFill } from "@/assets/icons/filled/harm-info-fill.svg";

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
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values);
  };

  const required = (value: string) => {
    return !value && getValues("response")
      ? "Fill in all the required fields to submit your feedback!"
      : true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.name)}>
        <Flex gap="10px" fontSize="16px">
          <Tooltip
            label="Write your name here"
            hasArrow
            placement="right-start"
            variant="default"
          >
            <Box w="6" opacity=".5">
              <InfoFill style={{ width: 16, height: 16 }} />
            </Box>
          </Tooltip>
          <FormLabel htmlFor="name">First name</FormLabel>
        </Flex>
        <Input
          id="name"
          placeholder="Mary"
          {...register("name", {
            pattern: {
              value: /^[A-Za-z А-Яа-я]{0,50}$/,
              message: "Fill in the field correctly",
            },
            validate: {
              required,
            },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.email)}>
        <Flex gap="10px" fontSize="16px">
          <Tooltip
            label="Write your email here"
            hasArrow
            placement="right-start"
            variant="default"
          >
            <Box w="6" opacity=".5">
              <InfoFill style={{ width: 16, height: 16 }} />
            </Box>
          </Tooltip>
          <FormLabel htmlFor="feedback">Email</FormLabel>
        </Flex>
        <Input
          id="email"
          placeholder="mary@epam.com"
          {...register("email", {
            pattern: {
              value: /[a-z0-9_-]+@[a-z]+\.[a-z]{2,4}/g,
              message: "Fill in the field correctly",
            },
            validate: {
              required,
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.feedback)}>
        <Flex gap="10px" fontSize="16px">
          <Tooltip
            label="We are glad to receive feedback from you! Write your feedback or suggestion here, use no more than 500 symbols!"
            hasArrow
            placement="right-start"
            variant="default"
          >
            <Box w="6" opacity=".5">
              <InfoFill style={{ width: 16, height: 16 }} />
            </Box>
          </Tooltip>
          <FormLabel htmlFor="feedback">My feedback *</FormLabel>
        </Flex>
        <Textarea
          id="feedback"
          placeholder="Write your feedback or suggestion here"
          {...register("feedback", {
            maxLength: {value: 500, message: "Fill in the field correctly"},
            required:
              "Fill in all the required fields to submit your feedback!",
          })}
        />
        <FormErrorMessage>
          {errors.feedback && errors.feedback.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <Flex gap="10px" fontSize="16px">
          <Tooltip
            label="Check if you want to receive a response from our team"
            hasArrow
            placement="right-start"
            variant="default"
          >
            <Box w="6" opacity=".5">
              <InfoFill style={{ width: 16, height: 16 }} />
            </Box>
          </Tooltip>
          <Checkbox id="response" {...register("response")} />
          <FormLabel htmlFor="response">I want to get a response</FormLabel>
        </Flex>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Send
      </Button>
    </form>
  );
};

export default Form;
