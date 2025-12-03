const COLORS = {
  brand: {
    0: "#CCDBFF",
    1: "#B2C8FF",
    2: "#A6BFFF",
    3: "#99B6FF",
    4: "#8CADFF",
    5: "#80A4FF",
    6: "#739AFF",
    7: "#6691FF",
    8: "#4D7FFF",
    9: "#336DFF",
  },
  gray: {
    0: "#FDFDFD",
    1: "#FAFAFA",
    2: "#F0F0F0",
    3: "#E4E4E4",
    4: "#D8D8D8",
    5: "#CDCDCD",
    6: "#C0C0C0",
    7: "#B3B3B3",
    8: "#A3A3A3",
    9: "#A6A6A6",
  },

  dark: {
    0: "#787878",
    1: "#6D6D6D",
    2: "#606060",
    3: "#515151",
    4: "#454545",
    5: "#3B3B3B",
    6: "#2D2D2D",
    7: "#212121",
    8: "#141414",
    9: "#080808",
  },
  indigo: {
    0: "#EDF2FF",
    1: "#DBE4FF",
    2: "#BAC8FF",
    3: "#91A7FF",
    4: "#748FFC",
    5: "#5C7CFA",
    6: "#4C6EF5",
    7: "#4263EB",
    8: "#3B5BDB",
    9: "#364FC7",
  },
  red: {
    0: "#FFF5F5",
    1: "#FFE3E3",
    2: "#FFC9C9",
    3: "#FFA8A8",
    4: "#FF8787",
    5: "#FF6B6B",
    6: "#FA5252",
    7: "#F03E3E",
    8: "#E03131",
    9: "#C92A2A",
  },
  green: {
    0: "#E6FFEA",
    1: "#CCFFD4",
    2: "#B2FFBF",
    3: "#99FFA9",
    4: "#80FF95",
    5: "#66FF80",
    6: "#39BF50",
    7: "#39BF50",
    8: "#26BF40",
    9: "#11A629",
  },
  white: "#FFFFFF",
};

const colorStyles = {
  dark: {
    text: {
      accent: {
        default: COLORS.brand[5],
        inverse: COLORS.dark[9],
      },
      primary: {
        default: COLORS.white,
        inverse: COLORS.dark[9],
      },
      secondary: {
        default: COLORS.gray[4],
        inverse: COLORS.dark[4],
      },
      dimmed: {
        default: COLORS.gray[7],
        inverse: COLORS.dark[1],
      },
      tertiary: {
        default: COLORS.dark[0],
        inverse: COLORS.gray[7],
      },
      muted: {
        default: COLORS.dark[5],
        inverse: COLORS.gray[5],
      },
      link: {
        default: COLORS.indigo[4],
        hover: COLORS.indigo[1],
      },
    },
    background: {
      modal: COLORS.dark[9],
      border: {
        default: COLORS.dark[6],
        inverse: COLORS.gray[3],
      },
      card: {
        default: COLORS.dark[8],
        inner: COLORS.dark[7],
      },
      globe: {
        inverse: COLORS.gray[1],
        default: COLORS.dark[9],
        accent: COLORS.brand[9],
      },
    },
    button: {
      filled: {
        background: COLORS.brand[9],
        text: COLORS.white,
      },
      outline: {
        text: COLORS.gray[0],
        border: COLORS.brand[9],
      },
      hover: {
        background: COLORS.brand[5],
        border: COLORS.brand[5],
        text: COLORS.white,
      },
      tonal: {
        background: COLORS.indigo[1],
        text: {
          default: COLORS.dark[6],
          accent: COLORS.brand[9],
        },
      },
      text: {
        text: COLORS.brand[9],
      },
      vertical: {
        hover: {
          background: COLORS.dark[5],
        },
        disabled: {
          background: COLORS.dark[3],
        },
      },
    },
    input: {
      filled: {
        background: COLORS.dark[7],
        border: COLORS.dark[6],
        text: {
          default: COLORS.gray[1],
          placeholder: COLORS.dark[3],
          helper: COLORS.dark[3],
          label: COLORS.dark[2],
        },
      },
      focus: {
        border: COLORS.brand[9],
        background: COLORS.indigo[1],
      },
    },
    sys: {
      error: {
        text: COLORS.red[9],
      },
      accept: {
        background: COLORS.green[0],
        text: {
          default: COLORS.green[9],
          inverse: COLORS.white,
        },
      },
    },
    toggleButton: {
      outline: {
        border: COLORS.gray[5],
        text: COLORS.gray[5],
        active: {
          text: COLORS.brand[9],
          border: COLORS.brand[9],
        },
      },
    },
  },
};

export { COLORS, colorStyles }