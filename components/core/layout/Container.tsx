import { CSSProperties } from "@mui/material";
import React from "react";

export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  variant?: 'full-width' | 'default'
}

function Container({ variant = 'default', style, children, ...other }: ContainerProps) {
  const variantStyles: CSSProperties = variant == 'full-width' ? {
    width: '100%',
    paddingInline: '32px',
  } : {
    width: '1200px',
  }
  return (
    <div
      {...other}
      style={{
        ...style,
        ...variantStyles,
        margin: '0 auto',
      }}
    >
      {children}
    </div >
  );
}

export { Container }