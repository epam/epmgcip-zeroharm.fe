import { defineStyleConfig } from "@chakra-ui/react";

const trackStyles = {
  bgColor: "parameter.progressBg",
  h: "4px",
  borderRadius: "2px"
};

export const Progress = defineStyleConfig({
  variants: {
    default: {
      track: trackStyles
    },
    green: {
      track: trackStyles,
      filledTrack: {
        bgColor: "parameter.groupColor.green"
      }
    },
    yellow: {
      track: trackStyles,
      filledTrack: {
        bgColor: "parameter.groupColor.yellow"
      }
    },
    orange: {
      track: trackStyles,
      filledTrack: {
        bgColor: "parameter.groupColor.orange"
      }
    },
    red: {
      track: trackStyles,
      filledTrack: {
        bgColor: "parameter.groupColor.red"
      }
    },
    ruby: {
      track: trackStyles,
      filledTrack: {
        bgColor: "parameter.groupColor.ruby"
      }
    },
    violet: {
      track: trackStyles,
      filledTrack: {
        bgColor: "parameter.groupColor.violet"
      }
    },
    blue: {
      track: trackStyles,
      filledTrack: {
        bgColor: "parameter.groupColor.blue"
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
});
