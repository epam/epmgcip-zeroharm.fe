import { FC, ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody
} from "@chakra-ui/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

const BaseModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="headers.h3">{title}</ModalHeader>
        <ModalCloseButton size="lg" top={"3"} opacity=".5" />
        <ModalBody borderBottomRadius="lg">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
