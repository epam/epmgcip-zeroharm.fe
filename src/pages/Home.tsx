import { Container } from "@chakra-ui/react";
import { Selector, Greetings } from "@Components";

export const Home = () => {
  return (
    <Container
      as="main"
      p={{ base: "8px 16px", md: "24px 28px" }}
      minH={{
        base: "calc(100vh - var(--headerMobileHeight) - var(--footerMobileMaxHeight))",
        md: "calc(100vh - var(--headerHeight) - var(--footerHeight))"
      }}
      display="flex"
      justifyContent="space-between"
      flexDirection={{ base: "column", lg: "row" }}
      maxW={{ base: "343px", md: "472px", lg: "1176px" }}
      alignItems="center"
      gap={{ base: "24px", lg: "0" }}
    >
        <Selector />
        <Greetings />
    </Container>
  );
};
