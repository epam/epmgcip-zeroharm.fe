import { FC } from "react";
import { Button } from "@chakra-ui/react";
import { t } from "i18next";
import { useDataStore } from "@Store/useDataStore";
import { ReactComponent as ThumbIcon } from "@Assets/icons/stroke/harm-thumb.svg";

type FeedbackButtonProps = {
  onClick?: () => void;
}

export const FeedbackButton: FC<FeedbackButtonProps> = ({ onClick }) => {
  const { toggleIsFormModalActive } = useDataStore();

  const clickHandler = () => {
    onClick && onClick();
    toggleIsFormModalActive();
  };

  return (
    <Button
      leftIcon={<ThumbIcon />}
      fontSize="small"
      lineHeight="small"
      onClick={clickHandler}
      variant="gradient"
    >
      { t("pages.footer.button") }
    </Button>
  );
};
