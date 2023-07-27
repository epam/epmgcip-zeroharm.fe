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
  textBtn?: string;
  title?: string;
  children: ReactNode;
};

const BaseModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  textBtn,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="headers.h3">{title}</ModalHeader>
        <ModalCloseButton size="lg" top={"3"} />
        <ModalBody>{children}</ModalBody>
        {textBtn && (
          <ModalFooter w={"initial"} pos={"initial"} borderBottomRadius={"lg"}>
            <Button mr={3} onClick={onClose}>
              {textBtn}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
