import type { Metadata } from "next";
import "./globals.css";
import { colorStyles } from "@/utils/styles/colors";
import ClientLayoutShell from "./ClientLayoutShell";

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
        fontSize: '16px',
      }}
    >
      <body
        style={{
          backgroundColor: colorStyles.dark.background.globe.default
        }}
      >
        <ClientLayoutShell>
          {children}
        </ClientLayoutShell>
      </body>
    </html >
  );
}
