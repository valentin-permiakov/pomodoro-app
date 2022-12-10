import React from 'react'
import styles from './timer-header.scss'

export function TimerHeader() {
  return (
    <div className={styles.timerHeaderContainer}>
      <h2 className={styles.timerHeader}>Сверстать сайт</h2>
      <span>Помидор 1</span>
    </div>
  )
}
