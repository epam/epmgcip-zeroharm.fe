import { FC } from "react";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { useDataStore } from "@Store/useDataStore";
import { ReactComponent as ThumbIcon } from "@Assets/icons/stroke/feedback-button-thumb.svg";

export const FeedbackButtonMobile: FC = () => {
  const { toggleIsFormModalActive } = useDataStore();

  const colorDark = "linear-gradient(129deg, #394 -18.95%, #FFA01C 22.54%, #FC7753 64.03%, #E6484E 105.52%, #C53446 147%, #7D5BA6 188.49%)";
  const colorLight = "linear-gradient(314deg, #3060E5 20.59%, #7CD0FF 115.69%)";
  const color = useColorModeValue(colorLight, colorDark);

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
      bg={`${color}`}
      _hover={{ bg: `${color}` }}
      onClick={() => toggleIsFormModalActive()}
    />
  );
};
