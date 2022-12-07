import { extendTheme } from "@chakra-ui/react";
// Foundations
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { fontSizes } from "./foundations/fontSizes";
import { lineHeights } from "./foundations/lineHeights";
// Components
import { Button } from "./components/Button";
import { Progress } from "./components/Progress";
import { Tooltip } from "./components/Tooltip";

const overrides = {
  styles,
  colors,
  fonts,
  fontSizes,
  lineHeights,
  components: {
    Button,
    Progress,
    Tooltip,
  },
};

export default extendTheme(overrides);
