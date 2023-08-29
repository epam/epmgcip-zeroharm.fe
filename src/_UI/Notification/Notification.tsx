import { FC } from "react";
import { Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { Icon } from "../Icon/Icon";
import { NotificationType, notificationsData, NotificationResult, NotificationData } from "@/constants";
import { resolveTranslationPath } from "@/helpers";

type NotificationTypeProps = {
  result: NotificationResult;
  type: string;
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

export const Notification: FC<NotificationTypeProps> = ({ result, type, isOpen, onClose, id }) => {
  const data: NotificationType = notificationsData[result as NotificationResult];
  const notificationData = data[type as keyof NotificationType];
  const notificationOptions = (notificationData as NotificationData[]).map((notification) => resolveTranslationPath(notification));
  const notification = notificationOptions.find(({ notificationId }: { notificationId: string }) => {
    return notificationId === id;
  });

  const { color } = data;
  const { notificationTitle, notificationText } = notification;

  return (
    <>
      <Modal
        size="md"
        variant="colored"
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent borderColor={color}>
          <ModalHeader>
            <Icon
              type="stroke"
              name={`harm-${result}`}
              color={color}
            />
            <Text lineHeight={"medium"}>{ notificationTitle }</Text>
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
            <Text>{ notificationText }</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
