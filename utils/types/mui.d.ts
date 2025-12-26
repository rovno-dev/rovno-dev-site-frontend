import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    tonal: true;
    "tonal-accent": true;
    elevated: true;
  }
}