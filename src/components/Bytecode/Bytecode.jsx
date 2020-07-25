import React, { Fragment } from "react"
import styles from "../../styles/styles.module.scss"

export const Bytecode = ({ children }) => {
  return (
    <p className={styles.bytecode}>
      {children.map((instruction, index) => (
        <Fragment key={index}>
          {instruction}
          <br />
        </Fragment>
      ))}
    </p>
  )
}
