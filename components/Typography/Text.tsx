import { colorStyles } from "@/utils/styles/colors";
import { ReactNode } from "react";

interface TextProps {
  variant?: 'large' | 'default' | 'secondary' | 'small' | 'tiny';
  color?: string;
  children?: ReactNode;
}

const textFontFamilies = {
  default: "Noto Sans",
};

const textStyles = {
  large: {
    fontSize: "1.12rem",
    fontWeight: "400",
    fontFamily: textFontFamilies.default,
  },
  default: {
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: textFontFamilies.default,
  },
  secondary: {
    fontSize: "0.88rem",
    fontWeight: "400",
    fontFamily: textFontFamilies.default,
  },
  small: {
    fontSize: "0.75rem",
    fontWeight: "400",
    fontFamily: textFontFamilies.default,
  },
  tiny: {
    fontSize: "0.62rem",
    fontWeight: "400",
    fontFamily: textFontFamilies.default,
  },
};

function Text({ variant = 'default', color = colorStyles['dark'].text.primary.default, children }: TextProps) {
  return (
    <p
      style={{
        ...textStyles[variant],
        color,
      }}
    >
      {children}
    </p>
  );
}

export { Text }