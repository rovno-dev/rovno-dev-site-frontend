import { ReactNode } from "react"
import styles from './Text.module.css'
interface TextProps {
  variant: "large" | "default" | "secondary" | "small" | "tiny"
  children: ReactNode
  className?: string
}
export default function Text({variant, children, className}: TextProps) {
  return (
    <p className={`${styles[variant]} ${className ?? ""}`}>{children}</p>
  )
}