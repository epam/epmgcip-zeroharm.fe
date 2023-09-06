import { FC, useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { t } from "i18next";
import { useDataStore } from "@Store/useDataStore";
import { BaseModal } from "../BaseModal/BaseModal";
import { Form } from "../Form/Form";
import { Notification } from "@UI";

export const FormModal: FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmittedWithResponse, setIsSubmittedWithResponse] = useState(false);
  const { isFormModalActive, toggleIsFormModalActive } = useDataStore();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const closeHandler = () => {
    onClose();
    toggleIsFormModalActive();
  };

  const onNotificationClose = () => {
    closeHandler();
    setIsFormSubmitted(false);
  };

  useEffect(() => {
    if (isFormModalActive) {
      onOpen();
    }
  }, [isFormModalActive]);

  return (
    <>
      { !isFormSubmitted && (
        <BaseModal
          isOpen={isOpen}
          onClose={closeHandler}
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
          onClose={onNotificationClose}
          result="success"
          type="formNotifications"
          id={isSubmittedWithResponse ? "form_with_response" : "form_without_response"}
        />
      ) }
    </>
  );
};
