import { useEffect } from "react";

export const useBodyScrollController = (isLockScrollCase: boolean, isUnlockScrollCase: boolean) => {
  const body = document.querySelector("body");

  const blockBodyFromScrolling = () => {
    body!.style.overflow = "hidden";
  };

  const unblockBodyFromScrolling = () => {
    body!.style.overflow = "auto";
  };

  useEffect(() => {
    if (isLockScrollCase) {
      blockBodyFromScrolling();
    }
  }, [isLockScrollCase]);

  useEffect(() => {
    if (isUnlockScrollCase) {
      unblockBodyFromScrolling();
    }
  }, [isUnlockScrollCase]);
};
