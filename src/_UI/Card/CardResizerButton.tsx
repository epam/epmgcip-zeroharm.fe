import { FC } from "react";
import { Button } from "@chakra-ui/react";

type CardResizerButtonProps = {
  text: string;
  toggleCard: () => void;
}

export const CardResizerButton: FC<CardResizerButtonProps> = ({ toggleCard, text }) => {
  return (
    <>
      { " " }
      <Button variant="link" onClick={toggleCard}>
        { text }
      </Button>
    </>
  );
};
