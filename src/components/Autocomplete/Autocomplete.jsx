import React, { useState } from "react";
import styles from "./styles.module.scss";

const Autocomplete = ({ items }) => {
  const [value, setValue] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);
  // const onKeyDown = (e) => {
  //   console.log(e);
  // };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.text}
        onFocus={(e) => setShowSuggestions(true)}
        onBlur={(e) => setShowSuggestions(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {/* How do we add several items to className? */}
      {showSuggestions && (
        <ul className={styles.suggestions}>
          {items
            .filter(
              (it) => !value || it.toLowerCase().startsWith(value.toLowerCase())
            )
            .map((item, index) => (
              <li style={{ zIndex: "9999" }} key={index}>
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
