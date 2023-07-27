import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

const BaseModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="headers.h3">{title}</ModalHeader>
        <ModalCloseButton size="lg" top={"3"} />
        <ModalBody borderBottomRadius="lg">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
