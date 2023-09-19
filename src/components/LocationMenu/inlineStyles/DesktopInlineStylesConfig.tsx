import { CSSProperties } from "react";

export const LocationMenuButtonInlineStyles: CSSProperties = {
    position: "relative",
    width: "100%",
    borderRadius: "8px",
    background: "var(--dark-base-colors-700, #48494D)",
    padding: "16px",
    height: "56px",
    zIndex: "1",
    pointerEvents: "none"
};

export const IconMapInlineStyles: CSSProperties = {
    width: "20px",
    height: "20px",
    color: "var(--chakra-colors-gray-400)"
};

export const LocationAddressTextInlineStyles: CSSProperties = {
    lineHeight: "24px",
    fontWeight: "400",
    fontSize: "16px",
    marginRight: "auto",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
};

export const ArrowIconsInlineStyles: CSSProperties = {
    width: "24px",
    height: "24px",
    color: "var(--chakra-colors-gray-400)"
};
