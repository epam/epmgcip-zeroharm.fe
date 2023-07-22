import * as React from "react";
import {
  Flex,
  Text,
  Link as ChakraLink,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { t } from "i18next";
import Form from "../Form/Form";

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader w={"initial"} pos={"initial"}>Help us be better</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form />
          </ModalBody>
          <ModalFooter w={"initial"} pos={"initial"}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Send Feedback
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Footer;
