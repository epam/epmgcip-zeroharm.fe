import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  textBtn?: string;
  title?: string;
  children?: ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  textBtn = "Send",
  title,
  children,
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader w={"initial"} pos={"initial"}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter w={"initial"} pos={"initial"}>
          <Button mr={3} onClick={onClose}>
            {textBtn}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
