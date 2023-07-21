/* eslint-disable quotes */
import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { t } from "i18next";

type PopupType = {
  isOpen?: boolean;
  children?: React.ReactNode;
};

export const Popup: React.FC<PopupType> = ({ isOpen = false, children }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <Flex
      direction="column"
      display={open ? "flex" : "none"}
      bg="white"
      color="gray.700"
      p="16px"
      maxW="300px"
      gap="8px"
      borderRadius="8px"
      position="relative"
      top="-10px"
      _before={{
        content: '""',
        boxSize: "12px",
        left: "calc(50%-6px)",
        top: "-6px",
        bg: "white",
        transform: "rotate(45deg)",
        position: "absolute",
      }}
    >
      {children}
      <Box
        onClick={() => setOpen(false)}
        textAlign="right"
        fontWeight="700"
        cursor="pointer"
      >
        {t("pages.home.close")}
      </Box>
    </Flex>
  );
};
