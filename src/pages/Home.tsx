import { Container, Flex } from "@chakra-ui/react";
import { Greetings, Selector } from "@Components";

export const Home = () => {
  return (
    <Container
      as="main"
      maxW="1176px"
      p="0px 28px"
    >
      <Flex
        maxW={{base: "472px", lg: "100%"}}
        flexDirection={{base: "column", lg: "row"}}
        justifyContent="space-between"
        alignItems={{base: "center", lg: "flex-start"}}
        gap={{base: "24px", lg: "0px"}}
        margin="0px auto"
      >
        <Selector />
        <Greetings />
     </Flex>
    </Container>
  );
};
