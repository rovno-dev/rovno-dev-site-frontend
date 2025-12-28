import { ReactNode } from "react"
import styles from './Title.module.css'
interface TitleProps {
  variant: "large" | "default" | "secondary" | "small" | "tiny"
  children: ReactNode
}
export default function Title({children, variant}: TitleProps) {
  return (
    <p className={`${styles[variant]}`}>{children}</p>
  )
}