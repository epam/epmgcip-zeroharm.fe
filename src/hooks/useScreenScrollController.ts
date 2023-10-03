import { useEffect } from "react";

export const useScreenScrollController = (isLockScrollCase: boolean, isUnlockScrollCase: boolean) => {
  const body = document.querySelector("body");

  useEffect(() => {
    const lockBodyScroll = () => {
      body!.style.overflow = "hidden";
    };

    if (isLockScrollCase) {
      lockBodyScroll();
    }
  }, [isLockScrollCase, body]);

  useEffect(() => {
    const unlockBodyScroll = () => {
      body!.style.overflow = "auto";
    };

    if (isUnlockScrollCase) {
      unlockBodyScroll();
    }
  }, [isUnlockScrollCase, body]);
};
