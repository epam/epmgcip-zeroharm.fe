import { FC } from "react";
import {
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import { notificationsData } from "@Constants";
import { Icon } from "../Icon/Icon";

type NotificationTypeProps = {
  type: "success" | "alert" | "warning"| "hint";
  isOpen: boolean;
  onClose: () => void;
};

export const Notification: FC<NotificationTypeProps> = ({
  type,
  isOpen,
  onClose
}) => {

  const data = notificationsData.find((item) => item.notificationType === type);

  return (
    <>
      <Modal
        size="md"
        variant={"colored"}
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent borderColor={data?.notificationColor}>
          <ModalHeader>
            <Icon
              type="stroke"
              name={`harm-${type}`}
              color={data?.notificationColor}
            />
            <Text lineHeight={"medium"}>{ data?.notificationTitle }</Text>
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
            <Text>{ data?.notificationText }</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
