import { FC } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { t } from "i18next";
import { FormModal } from "../FormModal/FormModal";
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
      <FormModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};
