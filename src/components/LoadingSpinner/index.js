import styles from './LoadingSpinner.module.scss'

export default function LoadingSpinner() {
  return (
    <img src="/loading.svg" alt="" role="presentation" className={styles.spinner} />
  )
}
