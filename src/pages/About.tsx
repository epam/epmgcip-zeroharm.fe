import * as React from "react";
import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LayoutAboutPage from "@Components/Layouts/LayoutAboutPage";
import Navigation from "@Components/Navigation/Navigation";
import aboutImage from "@/assets/images/about.jpg";

const PageAbout = () => {
  const About = () => (
    <>
      <Image src={aboutImage} alt="" width="100%" />
      <Container mt="12px">
        <Flex direction="column" gap="24px">
          <Heading as="h1" p="12px 0">
            About the Project
          </Heading>
          <Text>
            <b>ZeroHarm</b> — is a service that allows you to monitor the level
            of air pollution and percentage of humidity, ultraviolet radiation
            index, noise level, as well as atmospheric pressure in your city.
            Timely monitoring of these indicators will allow you to avoid
            negative health effects and prepare for weather or anthropogenic
            phenomena that most affect the human body, and vice versa - if the
            indicators are normal, we will tell you how to spend time outdoors
            with health benefits.
          </Text>
          <Heading as="h2" fontSize="24px">
            Why it's important to monitor the quality of the air we breathe
          </Heading>
          <Text>
            According to the UN Economic Commission for Europe's Web site, air
            pollution is now considered the greatest threat to health from the
            environment, causing 7 million deaths worldwide each year. Air
            pollution causes and exacerbates a number of diseases, from asthma
            to cancer, lung disease and heart disease. The International Agency
            for Research on Cancer classifies outdoor air pollution and
            particulate matter as carcinogenic to humans.
          </Text>
          <Text>
            Thus, according to recent estimates by the World Health
            Organization, exposure to polluted air is a more important risk
            factor for major non-communicable diseases than previously thought.
            Air pollution is the largest source of disease burden from the
            environment.
          </Text>
          <Text>
            Every major city contains hundreds of air pollutants that we
            breathe. However, many of us do not have access to timely
            information about air quality, and air pollution often goes
            unnoticed.
          </Text>
          <Text>
            In order to detect air pollution and warn you in time, you only need
            to identify one marker pollutant found in almost all urban emissions
            - PM2.5 (Fine Particulate Matter).
          </Text>
          <Text>
            <b>PM2.5</b> — is microscopic particles of soot, mineral salts,
            rubber, sand and asphalt, heavy metal compounds, and chemical
            emissions, ranging in size from 0.001 to 2.5 micrometers (µm), tens
            of times thinner than a human hair (its thickness is 40-120 µm),
            smaller than a blood red blood cell (its diameter is 7 µm).
          </Text>
        </Flex>
      </Container>
    </>
  );

  return <LayoutAboutPage header={<Navigation />} main={<About />} />;
};

export default PageAbout;
