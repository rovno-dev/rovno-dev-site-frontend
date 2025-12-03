"use client"

import BottomAppBar from "@/components/BottomAppBar";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";

export default function ClientLayoutShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(undefined)

  useEffect(() => {
    setHeight(ref.current!.clientHeight)
  }, [])

  return (
    <>
      <Header ref={ref} />
      <main style={{
        paddingTop: height,
      }}>
        {children}
      </main>
      <BottomAppBar />
    </>
  );
}
