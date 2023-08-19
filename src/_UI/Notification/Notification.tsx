import { FC, ReactNode } from "react";
import {
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import Icon from "../Icon/Icon";
import { notificationsData } from "@/constants";

type NotificationTypeProps = {
  type: string;
  title: string,
  text: string,
  isOpen?: boolean;
  children?: ReactNode;
};

export const Notification: FC<NotificationTypeProps> = ({
  type, title, text
}) => {
  const { onClose } = useDisclosure();
  const isOpen = true;

  const data = notificationsData.find(item => item.notificationType === type);

  return (
    <>
      <Modal
        size="md"
        variant={"colored"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderColor={data?.notificationColor}>
          <ModalHeader>
            <Icon
              type="stroke"
              name={`harm-${type}`}
              color={data?.notificationColor}
            />
            <Text lineHeight={"medium"}>{ title }</Text>
            <ModalCloseButton
              size="lg"
              fontSize="18px"
              top={-2}
              right={0}
              opacity=".5"
            />
          </ModalHeader>
          <ModalBody
            w="89%"
            alignSelf="center"
          >
            <Text>{ text }</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
