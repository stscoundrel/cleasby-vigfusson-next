import styles from './ContentArea.module.scss'

export default function ContentArea({ children }) {
  return (
    <section className={styles.section}>
      {children}
    </section>
  )
}
