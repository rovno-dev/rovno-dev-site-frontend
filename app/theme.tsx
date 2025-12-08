"use client"

import { createTheme } from "@mui/material";
import { NotoSans } from "./connectFonts";
import { COLORS, colorStyles } from "@/utils/styles/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.brand[9],
      light: COLORS.brand[5],
      dark: COLORS.brand[7],
      contrastText: colorStyles.dark.text.primary.default,
    },
    secondary: {
      main: COLORS.brand[5],
    },
    text: {
      primary: colorStyles.dark.text.primary.default,
      secondary: colorStyles.dark.text.secondary.default,
    },
  },
  typography: {
    fontFamily: NotoSans.style.fontFamily,
    button: {
      fontFamily: NotoSans.style.fontFamily,
      // fontWeight: 900,
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colorStyles.dark.text.secondary.default,
          "&.Mui-focused": {
            color: colorStyles.dark.text.accent.default,
          },
          "&.Mui-disabled": {
            color: colorStyles.dark.text.muted.default,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colorStyles.dark.text.secondary.default,
          "&.Mui-focused": {
            color: colorStyles.dark.text.accent.default,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined", // or "standard"
      },
    },

    // ------------ Base styles for all text inputs ------------
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: colorStyles.dark.text.primary.default,
        },
        input: {
          color: colorStyles.dark.text.primary.default,
        },
      },
    },

    // ------------ Outlined Variant ------------
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: colorStyles.dark.input.filled.border,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colorStyles.dark.input.focus.border,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colorStyles.dark.input.focus.border,
          },
        },
      },
    },

    // ------------ Filled Variant ------------
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: colorStyles.dark.input.filled.background,
          "&:before": {
            borderBottomColor: colorStyles.dark.input.filled.border,
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottomColor: colorStyles.dark.input.focus.border,
          },
          "&.Mui-focused:before": {
            borderBottomColor: colorStyles.dark.input.focus.border,
          },
        },
      },
    },

    // ------------ Underline (standard) Variant ------------
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: colorStyles.dark.input.filled.border,
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottomColor: colorStyles.dark.input.focus.border,
          },
          "&.Mui-focused:after": {
            borderBottomColor: colorStyles.dark.input.focus.border,
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '1rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
          "&.Mui-disabled": {
            backgroundColor: colorStyles.dark.button.vertical.disabled.background,
            color: colorStyles.dark.text.muted.default,
            borderColor: colorStyles.dark.button.vertical.disabled.background,
            opacity: 1,
            cursor: "not-allowed",
          },
        },

        contained: {
          backgroundColor: colorStyles.dark.button.filled.background,
          color: colorStyles.dark.button.filled.text,
          "&:hover": {
            backgroundColor: colorStyles.dark.button.hover.background,
          },
          "&.Mui-disabled": {
            backgroundColor: colorStyles.dark.button.vertical.disabled.background,
            color: colorStyles.dark.text.dimmed.default,
          },
        },

        outlined: {
          color: colorStyles.dark.button.outline.text,
          borderColor: colorStyles.dark.button.outline.border,
          "&:hover": {
            borderColor: colorStyles.dark.button.hover.border,
          },
          "&.Mui-disabled": {
            borderColor: colorStyles.dark.button.vertical.disabled.background,
            color: colorStyles.dark.text.dimmed.default,
          },
        },

        text: {
          color: colorStyles.dark.button.text.text,
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.05)",
          },
          "&.Mui-disabled": {
            color: colorStyles.dark.text.dimmed.default,
          },
        },
      },
    },
  }
});