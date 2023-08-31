import { useEffect } from "react";

export const useBodyScrollController = (isBlockScrolling: boolean, isUnblockScrolling: boolean) => {
  const body = document.querySelector("body");

  const blockBodyFromScrolling = () => {
    body!.style.overflow = "hidden";
  };

  const unblockBodyFromScrolling = () => {
    body!.style.overflow = "auto";
  };

  useEffect(() => {
    if (isBlockScrolling) {
      blockBodyFromScrolling();
    }
  }, [isBlockScrolling]);

  useEffect(() => {
    if (isUnblockScrolling) {
      unblockBodyFromScrolling();
    }
  }, [isUnblockScrolling]);
};
