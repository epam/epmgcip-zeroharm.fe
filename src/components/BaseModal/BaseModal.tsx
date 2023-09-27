import { FC, ReactNode } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export const BaseModal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontSize={{ base: "22px", lg: "headers.h3" }}
          lineHeight={{ base: "headers.h4", lg: "headers.h3" }}
          p={{ base: "28px 12px 16px", md: "20px 20px 16px" }}
        >
          { title }
        </ModalHeader>
        <ModalCloseButton
          fontSize="large"
          width="24px"
          height="24px"
          top={{ base: "36px", md: "24px" }}
          right={{ base: "16px", md: "24px"}}
          color="gray.500"
        />
        <ModalBody
          padding={{ base: "0px 12px 28px", md: "0px 20px 20px" }}
        >
          { children }
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
