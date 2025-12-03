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
  heading: {
    h1: {
      fontSize: "3rem",
      fontWeight: "600",
      fontFamily: fontFamilies.heading.default,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: "600",
      fontFamily: fontFamilies.heading.default,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "600",
      fontFamily: fontFamilies.heading.default,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "500",
      fontFamily: fontFamilies.heading.default,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "500",
      fontFamily: fontFamilies.heading.default,
    },
    h6: {
      fontSize: "1.12rem",
      fontWeight: "500",
      fontFamily: fontFamilies.heading.default,
    },
  },

  title: {
    large: {
      fontSize: "1.5rem",
      fontWeight: "500",
      fontFamily: fontFamilies.title.default,
    },
    default: {
      fontSize: "1.25rem",
      fontWeight: "500",
      fontFamily: fontFamilies.title.default,
    },
    secondary: {
      fontSize: "1.12rem",
      fontWeight: "500",
      fontFamily: fontFamilies.title.default,
    },
    small: {
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: fontFamilies.title.default,
    },
    tiny: {
      fontSize: "0.88rem",
      fontWeight: "500",
      fontFamily: fontFamilies.title.default,
    },
  },

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