import "./globals.css";
import type { Metadata } from "next";
import { colorStyles } from "@/utils/styles/colors";
import { NotoSans } from "./connectFonts";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Digital-агентство Rovno.dev",
  description: "Digital-агентство полного цикла Rovno.dev - сайты, приложения, логотипы и айдентика, 3D, ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        height: "100%",
        fontSize: '16px',
      }}
      className={NotoSans.className}
    >
      <body
        style={{
          backgroundColor: colorStyles.dark.background.globe.default,
          height: "100%",
        }}
      >
        <ThemeProvider theme={theme}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html >
  );
}
