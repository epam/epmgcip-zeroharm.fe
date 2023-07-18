import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";

export const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
          id="name"
          placeholder="Mary"
          {...register("name", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.email)}>
        <FormLabel htmlFor="feedback">Email</FormLabel>
        <Input
          id="email"
          placeholder="mary@epam.com"
          {...register("email", {
            required: "This is required",
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.feedback)}>
        <FormLabel htmlFor="feedback">My feedback *</FormLabel>
        <Textarea
          id="feedback"
          placeholder="Write your feedback or suggestion here"
          {...register("feedback", {
            required: "This is required",
          })}
        />
        <FormErrorMessage>
          {errors.feedback && errors.feedback.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="response">I want to get a response</FormLabel>
        <Checkbox id="response" />
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Send
      </Button>
    </form>
  );
};

export default Form;
