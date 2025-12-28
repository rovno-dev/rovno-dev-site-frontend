import { ReactNode } from "react"
import styles from './Heading.module.css'

type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface TypographyProps {
  as: HeadingVariants
  className?: string 
  children: ReactNode
}
export default function Heading({as, children, className}: TypographyProps) {
  const Heading: HeadingVariants = as
  return (
    <>
    <Heading className={`${styles[as]} ${className ?? ""}`}>{children}</Heading>
    </>
  )
}