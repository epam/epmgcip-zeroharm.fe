import { FC } from "react";
import { Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { Icon } from "@UI";
import { NotificationType, notificationsData, NotificationResult, NotificationData } from "@Constants";
import { resolveTranslationPath } from "@Helpers";

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
  const notification = (notificationData as NotificationData[]).find(({ notificationId }) => notificationId === id);
  const notificationOptions = resolveTranslationPath(notification);

  const { color } = data;
  const { notificationTitle, notificationText } = notificationOptions;

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
