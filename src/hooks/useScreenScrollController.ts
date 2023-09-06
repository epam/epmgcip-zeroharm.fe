import { useEffect } from "react";

export const useScreenScrollController = (isLockScrollCase: boolean, isUnlockScrollCase: boolean) => {
  const body = document.querySelector("body");

  const lockBodyScroll = () => {
    body!.style.overflow = "hidden";
  };

  const unlockBodyScroll = () => {
    body!.style.overflow = "auto";
  };

  useEffect(() => {
    if (isLockScrollCase) {
      lockBodyScroll();
    }
  }, [isLockScrollCase]);

  useEffect(() => {
    if (isUnlockScrollCase) {
      unlockBodyScroll();
    }
  }, [isUnlockScrollCase]);
};
