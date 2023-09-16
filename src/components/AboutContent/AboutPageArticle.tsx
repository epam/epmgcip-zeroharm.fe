import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { type AboutPageData, aboutPageRawData } from "@Constants";
import { resolveTranslationPath } from "@Helpers";
import { TextSection } from "./TextSection";
import { TextSectionHeading } from "./TextSectionHeading";
import { CustomParagraph } from "./CustomParagraph";

export const AboutPageArticle: FC = () => {
  const aboutPageData: AboutPageData[] = aboutPageRawData.map(({ sectionId, sectionHeading, sectionParagraphs }) => ({
    sectionId,
    sectionHeading: resolveTranslationPath(sectionHeading),
    sectionParagraphs: sectionParagraphs.map((paragraph) => resolveTranslationPath(paragraph))
  }));

  return (
    <Flex
      as="article"
      maxW={{ base: "343px", md: "604px" }}
      direction="column"
      gap={{ base: "24px", lg: "40px" }}
    >
      {
        aboutPageData.map(({ sectionId, sectionHeading, sectionParagraphs }) => (
          <TextSection
            key={sectionId}
            heading={<TextSectionHeading {...sectionHeading} />}
          >
            {
              sectionParagraphs.map(({paragraphContent, components}, index) =>
                !components
                  ? <Text key={sectionId + index}>
                      { paragraphContent }
                    </Text>
                  : <CustomParagraph
                      key={sectionId + index}
                      content={paragraphContent}
                      components={components}
                    />
              )
            }
          </TextSection>
        ))
      }
    </Flex>
  );
};
