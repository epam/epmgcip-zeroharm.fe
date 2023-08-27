import { extendTheme } from "@chakra-ui/react";
// Foundations
import { config } from "./foundations/themeConfig";
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { fontSizes } from "./foundations/fontSizes";
import { lineHeights } from "./foundations/lineHeights";
import { semanticTokens } from "./foundations/semanticTokens";
// Components
import { Button } from "./components/Button";
import { Progress } from "./components/Progress";
import { Tooltip } from "./components/Tooltip";
import { Divider } from "./components/Divider";
import { Modal } from "./components/Modal";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";
import { Switch } from "./components/Switch";

const overrides = {
  config,
  styles,
  colors,
  fonts,
  fontSizes,
  lineHeights,
  semanticTokens,
  components: {
    Button,
    Progress,
    Tooltip,
    Divider,
    Modal,
    Input,
    Checkbox,
    Switch
  }
};

export default extendTheme(overrides);
