import { FC, useState } from "react";
import { Flex, Text, Link as ChakraLink, Button, useDisclosure } from "@chakra-ui/react";
import { t } from "i18next";
import { FormModal } from "@Components";
import { ReactComponent as StarIcon } from "@Assets/icons/stroke/harm-star.svg";

export const FooterContent: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showForm, setShowForm] = useState<boolean>(true);

  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
    >
      <Text
        fontSize="sm"
        lineHeight="18px"
      >
        { t("pages.footer.start") } <br />
        <ChakraLink
          href="https://hydromet.uz/"
          isExternal
          _hover={{ color: "#FFA01C" }}
        >
          { t("pages.footer.link") }
        </ChakraLink>
        { t("pages.footer.end") }
      </Text>
      <Button
        leftIcon={<StarIcon />}
        size="sm"
        onClick={onOpen}
        variant="gradient"
      >
        { t("pages.footer.button") }
      </Button>
      <FormModal
        isOpen={isOpen}
        onClose={onClose}
        setShowForm={setShowForm}
        showForm={showForm}
      />
    </Flex>
  );
};
