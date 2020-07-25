import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles.module.scss";

const Container = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

//https://reactjs.org/docs/typechecking-with-proptypes.html
Container.propTypes = {
  /** The components of this library should be rendered within the Container */
  children: PropTypes.node.isRequired
};

export default Container;
