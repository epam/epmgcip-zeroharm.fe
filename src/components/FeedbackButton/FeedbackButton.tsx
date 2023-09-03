import { FC } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { t } from "i18next";
import { BaseModal } from "../BaseModal/BaseModal";
import { Form } from "../Form/Form";
import { ReactComponent as ThumbIcon } from "@Assets/icons/stroke/harm-thumb.svg";

export const FeedbackButton: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<ThumbIcon />}
        size="sm"
        onClick={onOpen}
        variant="gradient"
      >
        { t("pages.footer.button") }
      </Button>
      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        title={t("pages.form.title")}
      >
        <Form />
      </BaseModal>
    </>
  );
};
