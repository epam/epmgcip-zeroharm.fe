import { Variants } from "framer-motion";

export const menuListMotionVariantOptions = {
  ENTER: "enter",
  EXIT: "exit"
};

export const menuListMotionVariants: Variants = {
  enter: {
    transform: "scale(1, 1)",
    opacity: 1,
    visibility: "visible",
    transition: {
      opacity: {
        delay: 0.1,
        duration: 0.2
      },
      transform: {
        duration: 0.3
      }
    }
  },
  exit: {
    transform: "scale(1, 0)",
    opacity: 0,
    transition: {
      transform: {
        duration: 0.3
      },
      opacity: {
        delay: 0.1,
        duration: 0.2
      }
    },
    transitionEnd: {
      visibility: "hidden"
    }
  }
};
