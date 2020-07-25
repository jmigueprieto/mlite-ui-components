import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.module.scss";

const Comment = ({ children }) => {
  const initComment = "/**";
  const endComment = "*/";
  return (
    <p className={styles.comment}>
      {initComment} <br />
      {children
        .filter((it) => typeof it === "string")
        .map((line, index) => (
          <div key={index}>&nbsp;* {line}</div>
        ))}
      &nbsp;{endComment}
    </p>
  );
};

Comment.propTypes = {
  /** The components of this library should be rendered within the Container */
  children: PropTypes.node.isRequired
};

export default Comment;
