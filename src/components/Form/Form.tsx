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
} from "@chakra-ui/react";
import { ReactComponent as QuestionMark } from "@/assets/icons/stroke/harm-question.svg";
import { InputLabel } from "@/_UI/InputLabel/InputLabel";

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
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormData> = (values: FormData) => {
    console.log(values);
  };

  const watchResponse = watch("response", false);

  const required = (value?: string) => {
    return !value && watchResponse
      ? "Fill in all the required fields to submit your feedback!"
      : true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Divider mb={4} borderColor="gray.700" />
      <FormControl isInvalid={Boolean(errors.name)} mb={2}>
        <InputLabel
          tooltipText="Write your name here"
          label="Name"
          htmlFor="name"
          response={watchResponse}
        />
        <Input
          id="name"
          placeholder="Mary"
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
          {
            <FormErrorMessage mt="0" fontSize={"md"}>
              {errors.name && errors.name.message?.toString()}
            </FormErrorMessage>
          }
        </Box>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.email)} mb={2}>
        <InputLabel
          tooltipText="Write your email here"
          label="Email"
          htmlFor="email"
          response={watchResponse}
        />
        <Input
          id="email"
          placeholder="mary@epam.com"
          {...register("email", {
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
          {
            <FormErrorMessage mt="0" fontSize={"md"}>
              {errors.email && errors.email.message?.toString()}
            </FormErrorMessage>
          }
        </Box>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.feedback)} mb={2}>
        <InputLabel
          tooltipText="We are glad to receive feedback from you! Write your feedback or suggestion here, use no more than 500 symbols!"
          label="My feedback"
          htmlFor="feedback"
          response={watchResponse}
        />
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
          <FormErrorMessage mt="0" fontSize={"md"}>
            {errors.feedback && errors.feedback.message?.toString()}
          </FormErrorMessage>
        </Box>
      </FormControl>
      <FormControl pb={4}>
        <Flex mb={2} align={"center"}>
          <Tooltip
            label="Check if you want to receive a response from our team"
            hasArrow
            placement="right-start"
            variant="light"
          >
            <Box w="6" mr="2" opacity=".5">
              <QuestionMark style={{ width: 20, height: 20 }} />
            </Box>
          </Tooltip>
          <Checkbox
            size="lg"
            spacing="20px"
            mr="2"
            id="response"
            {...register("response")}
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
