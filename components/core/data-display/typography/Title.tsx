import { TextProps } from "@/components/core/data-display/typography/Text";
import { colorStyles } from "@/utils/styles/colors";

const fontFamilies = {
  default: "Noto Sans",
};

const textStyles = {
  large: {
    fontSize: "1.5rem",
    fontWeight: "500",
    fontFamily: fontFamilies.default,
  },
  default: {
    fontSize: "1.25rem",
    fontWeight: "500",
    fontFamily: fontFamilies.default,
  },
  secondary: {
    fontSize: "1.12rem",
    fontWeight: "500",
    fontFamily: fontFamilies.default,
  },
  small: {
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: fontFamilies.default,
  },
  tiny: {
    fontSize: "0.88rem",
    fontWeight: "500",
    fontFamily: fontFamilies.default,
  },
};

function Title({ variant = 'default', color = colorStyles['dark'].text.primary.default, children }: TextProps) {
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

export { Title }