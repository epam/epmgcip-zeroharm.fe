import { FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { useDataStore } from "@Store/useDataStore";
import { ReactComponent as ThumbIcon } from "@Assets/icons/stroke/feedback-button-thumb.svg";

export const FeedbackButtonMobile: FC = () => {
  const { toggleIsFormModalActive } = useDataStore();

  return (
    <IconButton
      aria-label="feedback button"
      icon={<ThumbIcon />}
      position="fixed"
      right="16px"
      bottom="80px"
      border="2px solid white"
      borderRadius="50px"
      width="56px"
      height="56px"
      bg="feedbackButtonMobileColor"
      _hover={{ bg: "feedbackButtonMobileColor" }}
      zIndex="1"
      onClick={toggleIsFormModalActive}
    />
  );
};
