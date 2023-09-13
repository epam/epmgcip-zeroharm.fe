import { FC } from "react";
import { Text } from "@chakra-ui/react";
import { type AboutPageData, aboutPageRawData } from "@Constants";
import { resolveTranslationPath } from "@Helpers";
import { TextSection } from "./TextSection";
import { TextSectionHeading } from "./TextSectionHeading";
import { CustomParagraph } from "./CustomParagraph";

export const AboutPageTextSections: FC = () => {
  const aboutPageData = aboutPageRawData.map(({ sectionId, sectionHeading, sectionParagraphs }) => {
    return {
      sectionId,
      sectionHeading: resolveTranslationPath(sectionHeading),
      sectionParagraphs: sectionParagraphs.map((paragraph) => resolveTranslationPath(paragraph))
    } as AboutPageData;
  });

  return (
    <>
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
    </>
  );
};
