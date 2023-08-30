import { FC, useState } from "react";
import { t } from "i18next";
import { BaseModal, Form } from "@Components";
import { Notification } from "@UI";

type FormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FormModal: FC<FormModalProps> = ({ isOpen, onClose }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmittedWithResponse, setIsSubmittedWithResponse] = useState(false);

  const close = () => {
    onClose();
    setIsFormSubmitted(false);
  };

  return (
    <>
      { !isFormSubmitted && (
        <BaseModal
          isOpen={isOpen}
          onClose={onClose}
          title={t("pages.form.title")}
        >
          <Form
            submitForm={setIsFormSubmitted}
            setIsSubmittedWithResponse={setIsSubmittedWithResponse}
          />
        </BaseModal>
      ) }
      { isFormSubmitted && (
        <Notification
          isOpen={isOpen}
          onClose={close}
          result="success"
          type="formNotifications"
          id={isSubmittedWithResponse ? "form_with_response" : "form_without_response"}
        />
      ) }
    </>
  );
};
