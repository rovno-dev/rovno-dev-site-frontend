import { NotoSans } from "@/app/connectFonts";
import { colorStyles } from "@/utils/styles/colors";
import { TextVariantsType } from "@/utils/types/typogtaphy";
import { CSSProperties } from "@mui/material";
import { ReactNode } from "react";

export interface TextProps {
  variant?: TextVariantsType;
  color?: string;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const textStyles = {
  large: {
    fontSize: "1.15rem",
    fontWeight: "400",
    fontFamily: NotoSans.style.fontFamily,
  },
  default: {
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: NotoSans.style.fontFamily,
  },
  secondary: {
    fontSize: "0.88rem",
    fontWeight: "400",
    fontFamily: NotoSans.style.fontFamily,
  },
  small: {
    fontSize: "0.75rem",
    fontWeight: "400",
    fontFamily: NotoSans.style.fontFamily,
  },
  tiny: {
    fontSize: "0.65rem",
    fontWeight: "400",
    fontFamily: NotoSans.style.fontFamily,
  },
};

function Text({ variant = 'default', color = colorStyles['dark'].text.primary.default, children, className }: TextProps) {
  return (
    <p
      className={className}
      style={{
        ...textStyles[variant],
        fontFamily: NotoSans.style.fontFamily,
        color,
      }}
    >
      {children}
    </p>
  );
}

export { Text }