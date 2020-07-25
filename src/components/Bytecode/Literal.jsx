import React from "react"
import styles from "../../styles/styles.module.scss"

export const Literal = ({ children }) => {
  return <span className={styles.literal}>{children}</span>
}
