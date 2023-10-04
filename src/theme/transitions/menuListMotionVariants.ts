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
      delayChildren: 0.1,
      opacity: {
        duration: 0.1
      },
      transform: {
        duration: 0.2
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
        duration: 0.2
      }
    },
    transitionEnd: {
      visibility: "hidden"
    }
  }
};

export const menuItemsMotionProps = {
  enter: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.1 } }
};
