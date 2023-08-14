import { FC } from "react";
import {
  Flex,
  Text,
  Link as ChakraLink,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { t } from "i18next";
import Form from "../Form/Form";
import BaseModal from "@/components/BaseModal/BaseModal";
import { ReactComponent as StarIcon } from "@/assets/icons/stroke/harm-star.svg";

const Footer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
    >
      <Text fontSize="sm" lineHeight={"18px"}>
        { t("pages.footer.text") } <br/>
        <ChakraLink
          href="https://hydromet.uz/"
          isExternal
          _hover={{ color: "#FFA01C" }}
        >
          { t("pages.footer.link") }
        </ChakraLink>
      </Text>
      <Button
        leftIcon={<StarIcon />}
        size="sm"
        onClick={onOpen}
        variant="gradient"
      >
        { t("pages.footer.button") }
      </Button>
      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        title={t("pages.form.title")}
      >
        <Form />
      </BaseModal>
    </Flex>
  );
};

export default Footer;
