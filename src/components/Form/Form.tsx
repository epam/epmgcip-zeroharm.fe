import { useEffect } from "react";
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
  Divider
} from "@chakra-ui/react";
import { ReactComponent as QuestionMark } from "@/assets/icons/stroke/harm-question.svg";
import { InputLabel } from "@/_UI/InputLabel/InputLabel";
import { t } from "i18next";

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
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({ mode: "onBlur" });

  const requiredErrorMessage = t("pages.form.required_notification");
  const invalidInputErrorMessage = t("pages.form.incorrectly_notification");

  const onSubmit: SubmitHandler<FormData> = (values: FormData) => { };

  const watchResponse = watch("response", false);

  const required = (value?: string) => {
    return !value && watchResponse ? requiredErrorMessage : true;
  };

  useEffect(() => {
    !watchResponse && clearErrors(["name", "email"]);
  }, [watchResponse, clearErrors]);

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Divider
        mb={ 4 }
        borderColor="gray.700"
      />
      <FormControl
        isInvalid={ Boolean(errors.name) }
        mb={ 2 }
      >
        <InputLabel
          tooltipText={ t("pages.form.name.tip") }
          label={ t("pages.form.name.label") }
          htmlFor="name"
          required={ watchResponse }
        />
        <Input
          id="name"
          placeholder={ t("pages.form.name.placeholder") }
          { ...register("name", {
            validate: {
              required,
              pattern: value => {
                if (value && watchResponse && !/^[A-Za-z А-Яа-я]{2,50}$/.test(value))
                  return invalidInputErrorMessage;
              }
            }
          }) }
        />
        <Box h="6" pt="1">
          {
            <FormErrorMessage
              mt="0"
              fontSize={ "md" }
            >
              { errors.name && errors.name.message?.toString() }
            </FormErrorMessage>
          }
        </Box>
      </FormControl>
      <FormControl
        isInvalid={ Boolean(errors.email) }
        mb={ 2 }
      >
        <InputLabel
          tooltipText={ t("pages.form.email.tip") }
          label={ t("pages.form.email.label") }
          htmlFor="email"
          required={ watchResponse }
        />
        <Input
          id="email"
          placeholder={ t("pages.form.email.placeholder") }
          { ...register("email", {
            validate: {
              required,
              pattern: value => {
                if (value && watchResponse && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value))
                  return invalidInputErrorMessage;
              },
              length: value => {
                if (watchResponse && value.length < 7 && value.length > 50)
                  return invalidInputErrorMessage;
              }
            }
          }) }
        />
        <Box h="6" pt="1">
          {
            <FormErrorMessage
              mt="0"
              fontSize={ "md" }
            >
              { errors.email && errors.email.message?.toString() }
            </FormErrorMessage>
          }
        </Box>
      </FormControl>
      <FormControl
        isInvalid={ Boolean(errors.feedback) }
        mb={ 2 }
      >
        <InputLabel
          tooltipText={ t("pages.form.feedback.tip") }
          label={ t("pages.form.feedback.label") }
          htmlFor="feedback"
          required
        />
        <Textarea
          h={ 100 }
          bgColor="gray.700"
          border={ 0 }
          focusBorderColor="white"
          id="feedback"
          placeholder={ t("pages.form.feedback.placeholder") }
          _placeholder={ { color: "gray.300", fontSize: "16px" } }
          { ...register("feedback", {
            pattern: {
              value:
                //eslint-disable-next-line
                /[A-Za-zА-Яа-я0-9 !@~#$№%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,500}/g,
              message: invalidInputErrorMessage
            },
            required: requiredErrorMessage
          }) }
        />
        <Box h="6" pt="1">
          <FormErrorMessage
            mt="0"
            fontSize={ "md" }
          >
            { errors.feedback && errors.feedback.message?.toString() }
          </FormErrorMessage>
        </Box>
      </FormControl>
      <FormControl pb={ 4 }>
        <Flex
          mb={ 2 }
          align={ "center" }
        >
          <Tooltip
            label={ t("pages.form.checkbox.tip") }
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
          <Checkbox
            size="lg"
            spacing="20px"
            mr="2"
            id="response"
            { ...register("response") }
          />
          <FormLabel
            mr={ 0 }
            mb={ 0 }
            htmlFor="response"
          >
            { t("pages.form.checkbox.label") }
          </FormLabel>
        </Flex>
      </FormControl>
      <Divider
        mb={ 4 }
        borderColor="gray.700"
      />
      <Button
        isLoading={ isSubmitting }
        type="submit"
        padding="16px 24px"
      >
        { t("pages.form.button") }
      </Button>
    </form>
  );
};

export default Form;
