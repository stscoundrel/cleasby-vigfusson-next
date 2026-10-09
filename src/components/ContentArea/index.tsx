import type { ReactNode } from 'react'
import styles from './ContentArea.module.scss'

interface ContentAreaProps {
  children: ReactNode
}

export default function ContentArea({ children }: ContentAreaProps) {
  return <section className={styles.section}>{children}</section>
}
