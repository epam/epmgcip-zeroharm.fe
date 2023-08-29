import { FC, SetStateAction, useState, Dispatch } from "react";
import { BaseModal, Form } from "@Components";
import { Notification } from "@/_UI/Notification/Notification";
import { t } from "i18next";

type FormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

export const FormModal: FC<FormModalProps> = ({ isOpen, onClose, showForm, setShowForm }) => {
  const [formSubmitted, isFormSubmitted] = useState(false);
  const [submitedWithResponse, isSubmitedWithResponse] = useState(false);

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
            isSubmitedWithResponse={isSubmitedWithResponse}
          />
        </BaseModal>
      ) : (
        <Notification
          isOpen={isOpen}
          onClose={close}
          result="success"
          type="formNotifications"
          id={submitedWithResponse ? "form_with_response" : "form_without_response"}
        />
      ) }
    </>
  );
};
