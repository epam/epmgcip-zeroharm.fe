import { FC, ReactNode } from "react";
import { Box, Flex, Image, Text, Divider, VStack, Link } from "@chakra-ui/react";
import aboutImage from "@Assets/images/about-full.jpeg";
import { Trans, useTranslation } from "react-i18next";

const linkStyleProps = {
  isExternal: true,
  borderBottom: "1px solid",
  ":hover": {
    textDecoration: "none",
    color: { base: "none", lg: "yellow.500" }
  }
};

const listTextItemStyleProps = {
  display: "list-item",
  ml: "23px"
};

type TextSectionProps = {
  heading: ReactNode;
  children: ReactNode;
}

const TextSection: FC<TextSectionProps> = ({ heading, children }) => {

  return (
    <VStack
      as="section"
      align="flex-start"
      gap={{ base: "16px", lg: "24px" }}
    >
      { heading }
      <VStack
        align="flex-start"
        gap="24px"
      >
        { children }
      </VStack>
    </VStack>
  );
};

export const About: FC = () => {
  const { t } = useTranslation();
  const translationRootPath = "pages.about";

  const Heading = ({ translationPath }: { translationPath: string }) => (
    <Text
      as="h2"
      fontSize={{ base: "headers.h5", lg: "headers.h5" }}
      lineHeight={{ base: "26px", lg: "headers.h4" }}
      fontWeight="bold"
    >
      { getTranslation(translationPath) }
    </Text>
  );

  const SimpleParagraph = ({ translationPath, subPath }: { translationPath: string, subPath: string }) => (
    <Text>
      { getTranslation(translationPath, subPath) }
    </Text>
  );

  const buildPath = (translationPath: string, subPath: string) =>
    `${translationRootPath}.${translationPath}.${subPath === "title" ? subPath : "paragraphs." + subPath}`;

  const getTranslation = (translationPath: string, subPath = "title") =>
    t(buildPath(translationPath, subPath));

  return (
    <Box
      as="main"
      pb={{ base: "0px", md: "var(--footerHeight)" }}
    >
      <Image
        h={{ base: "169px", md: "116px", lg: "236px" }}
        src={aboutImage}
        width="100%"
        objectFit="cover"
        alt="polluted_air"
        filter="saturate(0)"
      />
      <Divider variant="gradient" />
      <VStack
        my={{ base: "16px", md: "24px", lg: "40px" }}
        mx="auto"
        px="16px"
      >
        <Flex
          as="article"
          maxW={{ base: "343px", md: "604px" }}
          direction="column"
          gap={{ base: "24px", lg: "40px" }}
        >
          <TextSection
            heading={
              <Text
                as="h2"
                fontSize={{ base: "headers.h5", lg: "headers.h1" }}
                lineHeight={{ base: "26px", lg: "headers.h1" }}
                fontWeight="bold"
              >
                { getTranslation("intro") }
              </Text>
            }
          >
            <Text>
              <Trans
                i18nKey={buildPath("intro", "one")}
                components={{ 1: <strong /> }}
              />
            </Text>
          </TextSection>

          <TextSection
            heading={<Heading translationPath="air_quality"/>}
          >
            <Text>
              <Trans
                i18nKey={buildPath("air_quality", "one")}
                components={{
                  1: <Link
                        href="https://unece.org/ru/air-pollution-and-health"
                        isExternal
                        sx={linkStyleProps}
                      />
                }}
              />
            </Text>
            <Text>
              { <Trans
                i18nKey={buildPath("air_quality", "two")}
                components={{
                  1: <Link
                        href="https://www.who.int/health-topics/air-pollution#tab=tab_1"
                        isExternal
                        sx={linkStyleProps}
                      />
                }}
              /> }
            </Text>
            <SimpleParagraph translationPath="air_quality" subPath="three" />
            <SimpleParagraph translationPath="air_quality" subPath="four" />
            <Text>
              <Trans
                i18nKey={buildPath("air_quality", "five")}
                components={{ 1: <strong /> }}
              />
            </Text>
            <SimpleParagraph translationPath="air_quality" subPath="six" />
          </TextSection>

          <TextSection
            heading={<Heading translationPath="ultraviolet_radiation" />}
          >
            <Text>
              <Trans
                i18nKey={buildPath("ultraviolet_radiation", "one")}
                components={{ 1: <strong /> }}
              />
            </Text>
            <Text>
              <Trans
                i18nKey={buildPath("ultraviolet_radiation", "two")}
                components={{ 1: <strong /> }}
              />
            </Text>
          </TextSection>

          <TextSection
            heading={<Heading translationPath="atmospheric_pressure" />}
          >
            {
              ["one", "two"].map((subPath) => (
                <SimpleParagraph
                  key={"atmospheric_pressure" + subPath}
                  translationPath="atmospheric_pressure"
                  subPath={subPath}
                />
              ))
            }
          </TextSection>

          <TextSection
            heading={<Heading translationPath="ambient_noise" />}
          >
            {
              ["one", "two", "three", "four", "five", "six"].map((subPath) => (
                <SimpleParagraph
                  key={"ambient_noise_" + subPath}
                  translationPath="ambient_noise"
                  subPath={subPath}
                />
              ))
            }
          </TextSection>

          <TextSection
            heading={<Heading translationPath="air_humidity" />}
          >
            <SimpleParagraph translationPath="air_humidity" subPath="one" />
            <Box as="div">
              <Trans
                i18nKey={buildPath("air_humidity", "two")}
                components={{
                  1: <Text sx={listTextItemStyleProps} />,
                  2: <Text sx={listTextItemStyleProps} />,
                  3: <Text sx={listTextItemStyleProps} />,
                  4: <Text sx={listTextItemStyleProps} />
                }}
              />
            </Box>
            <SimpleParagraph translationPath="air_humidity" subPath="three" />
          </TextSection>
        </Flex>
      </VStack>
    </Box>
  );
};
