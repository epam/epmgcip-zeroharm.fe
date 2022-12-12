import { extendTheme } from "@chakra-ui/react";
// Foundations
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { fontSizes } from "./foundations/fontSizes";
import { lineHeights } from "./foundations/lineHeights";
import { sizes } from "./foundations/sizes";
// Components
import { Button } from "./components/Button";
import { Progress } from "./components/Progress";
import { Tooltip } from "./components/Tooltip";
import { Divider } from "./components/Divider";
import { Select } from "./components/Select";

const overrides = {
  styles,
  colors,
  fonts,
  fontSizes,
  lineHeights,
  sizes,
  components: {
    Button,
    Progress,
    Tooltip,
    Divider,
    Select,
  },
};

export default extendTheme(overrides);
