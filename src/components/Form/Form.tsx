import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, FormErrorMessage, FormLabel, FormControl, Input, Icon, Button, Textarea, Checkbox, Flex, Tooltip, Divider } from "@chakra-ui/react";
import { t } from "i18next";
import { InputLabel } from "@UI";
import { postData } from "@Services";
import { ReactComponent as Hint } from "@Assets/icons/stroke/harm-hint.svg";

type FormData = {
  name: string;
  email: string;
  feedback: string;
  isResponseRequired: boolean;
};

type FormProps = {
  submitForm: Dispatch<SetStateAction<boolean>>;
  setIsSubmittedWithResponse: Dispatch<SetStateAction<boolean>>;
};

export const Form: FC<FormProps> = ({ submitForm, setIsSubmittedWithResponse }) => {
  const {
    handleSubmit,
    register,
    watch,
    trigger,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({ mode: "onBlur" });

  const requiredErrorMessage = t("pages.form.required_notification");
  const invalidInputErrorMessage = t("pages.form.incorrectly_notification");

  const onSubmit: SubmitHandler<FormData> = ({ name, email, feedback, isResponseRequired }) => {
    postData("/v1/feedback", { name, email, message: feedback, checkbox: isResponseRequired });
    submitForm(true);
    setIsSubmittedWithResponse(watchResponse);
  };

  const watchResponse = watch("isResponseRequired", false);

  const required = (value?: string) => {
    return !value && watchResponse ? requiredErrorMessage : true;
  };

  useEffect(() => {
    !watchResponse ? clearErrors(["name", "email"]) : trigger();
  }, [watchResponse, clearErrors, trigger]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Divider
        mb={4}
        background="feedbackFormColor.divider"
      />
      <FormControl
        isInvalid={Boolean(errors.name)}
        mb={2}
      >
        <InputLabel
          tooltipText={t("pages.form.name.tip")}
          label={t("pages.form.name.label")}
          htmlFor="name"
          required={watchResponse}
        />
        <Input
          id="name"
          placeholder={t("pages.form.name.placeholder")}
          {...register("name", {
            validate: {
              required,
              pattern: (value) => {
                if (value && watchResponse && !/^[A-Za-z А-Яа-я-,'.]{2,50}$/.test(value)) return invalidInputErrorMessage;
              }
            }
          })}
        />
        <Box
          minH="6"
          pt="1"
        >
          {
            <FormErrorMessage
              mt="0"
              fontSize="sm"
            >
              { errors.name && errors.name.message?.toString() }
            </FormErrorMessage>
          }
        </Box>
      </FormControl>
      <FormControl
        isInvalid={Boolean(errors.email)}
        mb={2}
      >
        <InputLabel
          tooltipText={t("pages.form.email.tip")}
          label={t("pages.form.email.label")}
          htmlFor="email"
          required={watchResponse}
        />
        <Input
          id="email"
          placeholder={t("pages.form.email.placeholder")}
          {...register("email", {
            validate: {
              required,
              pattern: (value) => {
                if (value && watchResponse && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) return invalidInputErrorMessage;
              },
              length: (value) => {
                if (watchResponse && value.length < 7 && value.length > 50) return invalidInputErrorMessage;
              }
            }
          })}
        />
        <Box
          minH="6"
          pt="1"
        >
          {
            <FormErrorMessage
              mt="0"
              fontSize="sm"
            >
              { errors.email && errors.email.message?.toString() }
            </FormErrorMessage>
          }
        </Box>
      </FormControl>
      <FormControl
        isInvalid={Boolean(errors.feedback)}
        mb={2}
      >
        <InputLabel
          tooltipText={t("pages.form.feedback.tip")}
          label={t("pages.form.feedback.label")}
          htmlFor="feedback"
          required
        />
        <Textarea
          h={100}
          bgColor="feedbackFormColor.inputBg"
          border={0}
          focusBorderColor="feedbackFormColor.borderFocus"
          id="feedback"
          placeholder={t("pages.form.feedback.placeholder")}
          _placeholder={{ color: "feedbackFormColor.placeholder", fontSize: "16px" }}
          {...register("feedback", {
            minLength: {
              value: 6,
              message: invalidInputErrorMessage
            },
            maxLength: {
              value: 500,
              message: invalidInputErrorMessage
            },
            pattern: {
              value:
                //eslint-disable-next-line
                /[A-Za-zА-Яа-я0-9 !@~#$№%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
              message: invalidInputErrorMessage
            },
            required: requiredErrorMessage
          })}
        />
        <Box
          minH="6"
          pt="1"
        >
          <FormErrorMessage
            mt="0"
            fontSize="sm"
          >
            { errors.feedback && errors.feedback.message?.toString() }
          </FormErrorMessage>
        </Box>
      </FormControl>
      <FormControl pb={4}>
        <Flex
          mb={2}
          align="center"
        >
          <Tooltip
            label={t("pages.form.checkbox.tip")}
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
          <Checkbox
            size="lg"
            spacing="20px"
            mr="2"
            id="isResponseRequired"
            {...register("isResponseRequired")}
          />
          <FormLabel
            mr={0}
            mb={0}
            htmlFor="isResponseRequired"
          >
            { t("pages.form.checkbox.label") }
          </FormLabel>
        </Flex>
      </FormControl>
      <Divider
        mb={4}
        background="feedbackFormColor.divider"
      />
      <Button
        isLoading={isSubmitting}
        type="submit"
        padding="16px 24px"
        color="secondaryBgColor"
        background="primaryColor"
        _hover={{ background: "primaryColor" }}
      >
        { t("pages.form.button") }
      </Button>
    </form>
  );
};
