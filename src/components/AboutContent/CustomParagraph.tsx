import { FC } from "react";
import { Link, Text } from "@chakra-ui/react";
import { Trans } from "react-i18next";
import { SectionComponent } from "@Constants";

type CustomParagraphProps = {
  content: string;
  components: SectionComponent[];
}

const linkStyleProps = {
  borderBottom: "1px solid",
  color: "none",
  textDecoration: "none",
  ":hover": {
    textDecoration: "none"
  },
  "@media (hover: hover)": {
    ":hover": {
      color: "linkHoverAndActiveColor"
    }
  }
};

const listTextItemStyleProps = {
  display: "list-item",
  ml: "23px"
};

export const CustomParagraph: FC<CustomParagraphProps> = ({ content, components }) => {
  const componentsObj = components.reduce((componentsObj, { id, type, link }) => {
    let jsxComponent = null;

    switch (type) {
      case "strong": {
        jsxComponent = <strong />;
        break;
      }
      case "link": {
        jsxComponent =
          <Link
            href={link}
            isExternal
            sx={linkStyleProps}
          />;
        break;
      }
      case "listItem": {
        jsxComponent = <Text as="span" sx={listTextItemStyleProps} />;
      }
    }

    return {...componentsObj, ...{ [id]: jsxComponent }};
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
