import { Container } from "@chakra-ui/react";
import { Selector, Greetings } from "@Components";

export const Home = () => {
  return (
    <Container
      as="main"
      p={{ base: "8px 16px", md: "24px 28px" }}
      minH={{
        base: "calc(100vh - var(--headerMobileHeight) - var(--footerMaxHeight))",
        md: "calc(100vh - var(--headerHeight) - var(--footerMaxHeight))"
      }}
      display="flex"
      justifyContent={{ base: "center", lg: "space-between" }}
      flexDirection={{ base: "column", lg: "row" }}
      maxW={{ base: "375px", md: "528px", lg: "1176px" }}
      alignItems="center"
      gap={{ base: "24px", lg: "0" }}
    >
        <Selector />
        <Greetings />
    </Container>
  );
};
