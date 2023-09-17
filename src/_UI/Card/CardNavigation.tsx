import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const CardNavigation: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        marginTop: "auto",
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        width: "100%",
        p: "0 28px",
        bottom: "14px",
        zIndex: "100",
        color: "gray.800",
        svg: {
          cursor: "pointer"
        }
      }}
    >
      { children }
    </Box>
  );
};
