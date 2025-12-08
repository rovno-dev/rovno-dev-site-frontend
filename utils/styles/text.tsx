const fontFamilies = {
  heading: {
    default: "Oswald",
  },
  text: {
    default: "Noto Sans",
  },
  table: {
    default: "Noto Sans",
  }
}

const textStyles123 = {
  table: {
    primary: {
      fontSize: "0.88rem",
      fontWeight: "400",
      fontFamily: fontFamilies.table.default,
    },
    default: {
      fontSize: "0.88rem",
      fontWeight: "400",
      fontFamily: fontFamilies.table.default,
    },
    secondary: {
      fontSize: "0.75rem",
      fontWeight: "400",
      fontFamily: fontFamilies.table.default,
    },
    header: {
      title: {
        fontSize: "0.88rem",
        fontWeight: "500",
        fontFamily: fontFamilies.table.default,
      },
    },
  },
};

export { fontFamilies, textStyles123 }