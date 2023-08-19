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

type NotificationType = "success" | "alert" | "warning" | "hint";
type NotificationData = {
  color: string;
  title: string;
  text: string;
};

type NotificationsData = Record<NotificationType, NotificationData>;

type NotificationTypeProps = {
  type?: NotificationType;
  isOpen?: boolean;
  children?: ReactNode;
};

const mockData: NotificationsData = {
  success: {
    color: "#339944",
    title: "Success notification text",
    text: "Success notification big and beautiful description"
  },
  alert: {
    color: "#E6484E",
    title: "Alert notification text",
    text: "Alert notification big and beautiful description"
  },
  warning: {
    color: "#FFA01C",
    title: "Warning notification text",
    text: "Warning notification big and beautiful description"
  },
  hint: {
    color: "#7D5BA6",
    title: "Hint notification text",
    text: "Hint notification big and beautiful description"
  }
};

export const Notification: FC<NotificationTypeProps> = ({
  type = "hint"
}) => {
  const { onClose } = useDisclosure();
  const isOpen = true;

  return (
    <>
      <Modal
        size="md"
        variant={"colored"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderColor={mockData[type].color}>
          <ModalHeader>
            <Icon
              type="stroke"
              name={`harm-${type}`}
              color={mockData[type].color}
            />
            <Text lineHeight={"medium"}>{ mockData[type].title }</Text>
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
            <Text>{ mockData[type].text }</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
