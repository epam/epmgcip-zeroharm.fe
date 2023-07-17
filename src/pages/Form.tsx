import * as React from "react";
import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LayoutAboutPage from "@Components/Layouts/LayoutAboutPage";
import Navigation from "@Components/Navigation/Navigation";
import aboutImage from "@/assets/images/about.jpg";
import Footer from "@/components/Footer/Footer";
const PageForm = () => {
  const About = () => (
    <>
      <Container mt="12px">
        <Flex direction="column" gap="24px">
          <Heading as="h1" p="12px 0">
            Leave a feedback
          </Heading>
        </Flex>
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
