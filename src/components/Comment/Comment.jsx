import React from "react"
import styles from "../../styles/styles.module.scss"

const Comment = ({ lines }) => {
  const initComment = "/**"
  const endComment = " */"
  return (
    <p className={styles.comment}>
      {initComment} <br />
      {lines.map((line, index) => (
        <span key={index}>
          &nbsp;* {line}
          <br />
        </span>
      ))}
      {endComment}
    </p>
  )
}

export default Comment
