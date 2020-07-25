import React, { Fragment } from "react"
import styles from "../../styles/styles.module.scss"

const Container = ({ children }) => {
  return <div className={styles.page}>{children}</div>
}

export default Container
