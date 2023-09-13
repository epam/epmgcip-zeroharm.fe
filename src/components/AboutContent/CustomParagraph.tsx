import { FC } from "react";
import { Link, Text } from "@chakra-ui/react";
import { Trans } from "react-i18next";
import { SectionComponent } from "@Constants";

type CustomParagraphProps = {
  content: string;
  components: SectionComponent[];
}

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

export const CustomParagraph: FC<CustomParagraphProps> = ({ content, components }) => {
  const componentsObj = components.reduce((componentsObj, { id, type, link }) => {
    let componentJsx = null;
    switch (type) {
      case "strong": {
        componentJsx = <strong />;
        break;
      }
      case "link": {
        componentJsx =
          <Link
            href={link}
            isExternal
            sx={linkStyleProps}
          />;
        break;
      }
      case "listItem": {
        componentJsx = <Text as="span" sx={listTextItemStyleProps} />;
      }
    }

    return {...componentsObj, ...{ [id]: componentJsx }};
  }, {});

  return (
    <Text>
      <Trans
        components={componentsObj}
      >
        { content }
      </Trans>
    </Text>
  );
};
