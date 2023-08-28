import { Container, Flex } from "@chakra-ui/react";
import { Greetings, Selector } from "@Components";

export const Home = () => {
  return (
    <Container maxW="1280px">
      <Flex justifyContent="space-between">
        <Selector />
        <Greetings />
     </Flex>
    </Container>
  );
};
