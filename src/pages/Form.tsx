import * as React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import LayoutAboutPage from "@Components/Layouts/LayoutAboutPage";
import Navigation from "@Components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";

const PageForm = () => {
  const About = () => (
    <>
      <Container mt="12px">
        <Flex direction="column" gap="24px">
          <Heading as="h3" p="12px 0">
           Help us be better
          </Heading>
        </Flex>
        <Form />
      </Container>
    </>
  );

  return (
    <LayoutAboutPage
      header={<Navigation />}
      main={<About />}
      footer={<Footer />}
    />
  );
};

export default PageForm;
