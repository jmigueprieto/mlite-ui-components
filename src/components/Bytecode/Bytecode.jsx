import React from "react";
import styles from "../../styles/styles.module.scss";

export const Bytecode = ({ children }) => {
  return <p className={styles.bytecode}>{children}</p>;
};
