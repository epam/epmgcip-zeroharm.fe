import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  textBtn?: string;
  title?: string;
  children?: ReactNode;
};

const BaseModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  textBtn = "Send",
  title,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody>
          <Divider />
          {children}
          <Divider />
        </ModalBody>
        <ModalFooter w={"initial"} pos={"initial"} borderBottomRadius={"lg"}>
          <Button mr={3} onClick={onClose}>
            {textBtn}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
