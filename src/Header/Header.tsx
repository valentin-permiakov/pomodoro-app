import React from "react"
import { EIcons, Icon } from "../icons"
import styles from './header.scss'
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Icon name={EIcons.logo} size={40} />
          <h1 className={styles.logoHeader}>pomodoro_box</h1>
        </div>
      </div>
    </header>
  )
}
