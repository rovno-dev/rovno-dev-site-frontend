"use client"

import BottomAppBar from "@/components/BottomAppBar";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (headerRef.current)
      setHeaderHeight(headerRef.current.clientHeight);
  }, [headerRef]);

  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flex: "1 1 auto"
      }}
    >
      <header
        ref={headerRef}
        style={{
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <Header />
      </header >
      <main
        style={{
          marginTop: headerHeight,
          width: "100%",
        }}
      >
        {children}
      </main>
      <BottomAppBar />
    </div>
  )
}