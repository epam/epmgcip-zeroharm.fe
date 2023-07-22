import * as React from "react";
import {
  Flex,
  Text,
  Link as ChakraLink,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { t } from "i18next";
import Form from "../Form/Form";
import Modal from "@/_UI/Modal/Modal";

const Footer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex p="4px" gap="32px" w="100%" justify="space-between">
      <Text fontSize="xs">
        {t("pages.footer.text")}{" "}
        <ChakraLink href="https://hydromet.uz/" isExternal>
          {t("pages.footer.link")}{" "}
        </ChakraLink>
      </Text>
      <Button size="xs" onClick={onOpen}>
        {t("pages.footer.button")}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} title=" Help us be better" textBtn="Send Feedback">
        <Form />
      </Modal>
    </Flex>
  );
};

export default Footer;
