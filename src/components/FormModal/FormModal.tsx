import { FC, SetStateAction, useState, Dispatch } from "react";
import { t } from "i18next";
import { BaseModal, Form } from "@Components";
import { Notification } from "@UI";

type FormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

export const FormModal: FC<FormModalProps> = ({ isOpen, onClose, showForm, setShowForm }) => {
  const [formSubmitted, isFormSubmitted] = useState(false);
  const [isSubmittedWithResponse, setIsSubmittedWithResponse] = useState(false);

  const close = () => {
    onClose();
    setShowForm(true);
    isFormSubmitted(false);
  };

  return (
    <>
      { !formSubmitted && showForm ? (
        <BaseModal
          isOpen={isOpen}
          onClose={onClose}
          title={t("pages.form.title")}
        >
          <Form
            submitForm={isFormSubmitted}
            setShowForm={setShowForm}
            setIsSubmittedWithResponse={setIsSubmittedWithResponse}
          />
        </BaseModal>
      ) : (
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
