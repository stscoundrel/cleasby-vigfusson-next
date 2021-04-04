import styles from './BackToTop.module.scss'

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.backToTop} aria-label="Back to top" role="button" onClick={() => scrollToTop()}>
      ↑
    </div>
  )
}
