
import { FC } from "react";
import { Text } from "@chakra-ui/react";
import { SectionHeadingData } from "@Constants";

export const TextSectionHeading: FC<SectionHeadingData> = ({ tag, headingContent }) => {
  const headingStyles = {
    fontSize: { base: "headers.h5", lg: tag === "h2" ? "headers.h1" : "headers.h5" },
    lineHeight: { base: "26px", lg: tag === "h2" ? "headers.h1" : "headers.h4" },
    fontWeight: "bold"
  };

  return (
    <Text
      as={tag}
      sx={headingStyles}
    >
      { headingContent }
    </Text>
  );
};
